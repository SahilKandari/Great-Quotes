import React, { useCallback, useEffect, useRef, useState } from "react";
import "./AllQuotes.css";
import QuotesList from "./QuotesList";
import { useDispatch } from "react-redux";
import { quoteActions } from "../../store/quotes-slice";
import { useSelector } from "react-redux";
import axios from "axios";

const AllQuotes = () => {
  const dispatch = useDispatch();
  const authorData = useSelector((state) => state.quote.comments);
  const toggle = useSelector((state) => state.quote.toggle);
  const once = useRef(true);
  const fetchAuthorData = () => {
    if (once.current) {
      once.current = false;

      axios
        .get(
          "https://great-quotes-86e00-default-rtdb.firebaseio.com/quotes.json"
        )
        .then((res) => {
          dispatch(quoteActions.viewComments(res.data));
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  useEffect(() => {
    fetchAuthorData();
  }, [dispatch]);

  const ascendingHandler = () => {
    dispatch(quoteActions.ascendingOrder());
  };
  const descendingHandler = () => {
    dispatch(quoteActions.descendingOrder());
  };
  return (
    <div className="row allQuotes_section">
      <div className="col-6 allQuotes">
        <div className="col-4 allQuotes_button">
          {toggle && (
            <button onClick={ascendingHandler} className="btn btn-primary">
              Sort Acending
            </button>
          )}
          {!toggle && (
            <button onClick={descendingHandler} className="btn btn-danger">
              Sort Descending
            </button>
          )}
        </div>
        <div className="row allQuotes_line ">
          <hr />
        </div>
        <div className="col-12">
          <ul>
            {authorData.map((item) => {
              return (
                <QuotesList
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  quote={item.quote}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AllQuotes;
