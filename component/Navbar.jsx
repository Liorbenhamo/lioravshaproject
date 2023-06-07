import React from "react";
import "./navbar.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { InfoContext } from "../src/App";
function Navbar() {
  const info = React.useContext(InfoContext);
  return (
    <div className="bodynavbar">
      <header className="headernavbar">
        <Link to="/">
          <h1 className="logo">
            <p>bat yam school</p>
          </h1>
        </Link>

        <ul className="main-nav">
          <Link to="/register">
            <li className="headersnavbar">
              <p>login </p>
            </li>
          </Link>

          <Link to="/report">
            <li className="headersnavbar">
              <p>report</p>
            </li>
          </Link>
        </ul>
      </header>
      <Outlet />
    </div>
  );
}

export default Navbar;
