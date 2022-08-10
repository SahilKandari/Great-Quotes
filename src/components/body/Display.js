import React from "react";
import CommentForm from "./CommentForm";
import "./Display.css";
import { useSelector } from "react-redux";

const Display = () => {
  const name = useSelector((state) => state.quote.displayName);
  const quote = useSelector((state) => state.quote.displayQuote);

  return (
    <div className="row display_component">
      <div className="col-4 displaySection">
        <div className="row py-5  px-2">
          <h3 className="col-12 text-start">{quote}</h3>
        </div>
        <div className="row px-2 mb-2">
          <p className="col-6 offset-6 text-end ">{name}</p>
        </div>
      </div>
      <CommentForm  />
    </div>
  );
};
export default Display;
