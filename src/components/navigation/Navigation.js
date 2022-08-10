import React from "react";
import "./Navigation.css";
import {  NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="row navigation_component">
      <div className="col-4">
        <h1>Quotes</h1>
      </div>
      <div className="col-4 offset-4">
        <ul>
          <li>
            <NavLink activeClassName="activeNav" to="/welcome"  >All Quotes</NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeNav" to="/add">Add Quotes</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navigation;
