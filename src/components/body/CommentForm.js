import React, { useState } from "react";
import "./CommentForm.css";
import Comments from "./Comments";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { quoteActions } from "../../store/quotes-slice";
const CommentForm = () => {
  const [commentChange, setCommentChange] = useState();

  const dispatch = useDispatch();
  const showCommentInput = useSelector((state) => state.quote.toggleComment);
  console.log(showCommentInput, "showCommentInput");
  const id = useSelector((state) => state.quote.displayId);

  const commentChangeHandler = (event) => {
    setCommentChange(event.target.value);
  };
  const commentSubmitHandler = (event) => {
    event.preventDefault();

    if (commentChange?.length > 0) {
      postComments();
      dispatch(quoteActions.toggle());
    }

    setCommentChange("");
  };
  const postComments = () => {
    axios
      .post(
        "https://great-quotes-86e00-default-rtdb.firebaseio.com/comments.json",
        { comment: commentChange, id: id }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  
  
  return (
    <div className="row commentForm_section">
      <form onSubmit={commentSubmitHandler} className="col-4">
        <label htmlFor="addComments" className="form-label mb-3">
          User Comments
        </label>
        <textarea
          value={commentChange}
          onChange={commentChangeHandler}
          className="form-control "
          id="addComments "
          rows="4"
        />
        <button type="submit" className="btn btn-secondary mt-5">
          Add Comment
        </button>
      </form>
      <Comments />
    </div>
  );
};
export default CommentForm;
