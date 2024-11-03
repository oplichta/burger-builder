import React from "react";
import "./NavigationItem.css";
import { NavLink } from "react-router-dom";

const navigationItem = (props) => (
  <li className="NavigationItem">
    <NavLink
      to={props.link}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
