import React from "react";
import { Link } from "react-router-dom";
import "./navstyles.scss";

const NavBar = () => {
  return (
    <div className="navWrap">
      <li>
        <Link className="linkItem" to="/">
          Home
        </Link>
      </li>

      <li>
        <Link className="linkItem" to="/calcs">
          Calcs
        </Link>
      </li>

      <li>
        <Link className="linkItem" to="/gps">
          GPS
        </Link>
      </li>
    </div>
  );
};

export default NavBar;
