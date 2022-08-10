import React, { Fragment, useEffect, useRef } from "react";
import "./Comments.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { quoteActions } from "../../store/quotes-slice";
const Comments = (props) => {
  const once = useRef(true);
  const dispatch = useDispatch();
  const arry = useSelector((state) => state.quote.commentArry);

  const getComments = () => {
    if (once.current) {
      once.current = false;
      axios
        .get(
          "https://great-quotes-86e00-default-rtdb.firebaseio.com/comments.json"
        )
        .then((res) => {
          dispatch(quoteActions.getComments(res.data));
        })
        .catch((err) => {
          console.log(err.message, "error");
        });
    }
  };
  useEffect(() => {
    getComments();
  });

  return (
    <div className="row comments_section">
      <div className="col-4">
        <ul>
          {arry.map((item) => {
            console.log(item.key);
            return (
              <Fragment>
                <li key={item.key}>{item.comment}</li>
                <hr />
              </Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Comments;
