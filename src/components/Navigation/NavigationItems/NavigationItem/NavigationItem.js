import React from 'react';
import './NavigationItem.css';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
  <li className="NavigationItem">
    <NavLink activeClassName="active" to={props.link} exact>
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
