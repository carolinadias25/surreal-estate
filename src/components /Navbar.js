/* eslint-disable quotes */
import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar">
    <NavLink to="/" className="logo">
      <p className="logo-title">Surreal Estate</p>
    </NavLink>

    <ul className="navbar-links">
      <li className="navbar-links-item">
        <NavLink exact activeClassName="navbar-links-item-active" to="/">
          View Properties
        </NavLink>
      </li>
      <li className="navbar-links-item">
        <NavLink
          exact
          activeClassName="navbar-links-item-active"
          to="add-property"
        >
          Add Property
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
