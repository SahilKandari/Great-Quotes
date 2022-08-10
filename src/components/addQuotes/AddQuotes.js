import React, { useState } from "react";
import "./AddQuotes.css";

import axios from "axios";

const AddQuotes = () => {
  const [nameChange, setNameChange] = useState("");
  const [textChange, setTextChange] = useState("");

  const nameChangeHandler = (event) => {
    setNameChange(event.target.value);
  };

  const textChangeHandler = (event) => {
    setTextChange(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    axios
      .post(
        "https://great-quotes-86e00-default-rtdb.firebaseio.com/quotes.json",

        {
          name: nameChange.charAt(0).toUpperCase() + nameChange.slice(1),
          quote: textChange,
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setNameChange(" ");
    setTextChange("");
  };

  return (
    <div className="row addQuotes_section">
      <form onSubmit={formSubmitHandler} className="col-5 addQuotes">
        <label htmlFor="authorName" className="form-label">
          Author Name
        </label>
        <input
          value={nameChange}
          onChange={nameChangeHandler}
          type="text"
          className="form-control"
          id="authorName"
        />

        <label htmlFor="authorQuotes" className="form-label mt-3">
          Quotes
        </label>
        <textarea
          onChange={textChangeHandler}
          value={textChange}
          className="form-control"
          id="authorQuotes"
          rows="5"
        />
        <div className="row addQuotes_button mt-3">
          <div className="col-4 text-end ">
            <button className="btn btn-success ">Add Quote</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddQuotes;
