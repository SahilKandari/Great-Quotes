import React, { Fragment } from "react";
import "./QuotesList.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { quoteActions } from "../../store/quotes-slice";

const QuotesList = (props) => {
  const dispatch = useDispatch();
  const updateToDisplay = () => {
    dispatch(quoteActions.display({ name: props.name, quote: props.quote, id: props.id }));
  };
  return (
    <Fragment>
      {" "}
      <div className="quotesList">
        <li className="row quotesList_section">
          <div className="col-8 ">
            <div className="row ">
              <p className="text-start">{props.quote}</p>
            </div>
            <div className="row">
              <h5 className="text-start">{props.name}</h5>
            </div>
          </div>
          <div className="col-4">
            <Link
              onClick={updateToDisplay}
              to="/display"
              className="btn btn-success"
            >
              View Fullscreen
            </Link>
          </div>
        </li>
      </div>
    </Fragment>
  );
};
export default QuotesList;
