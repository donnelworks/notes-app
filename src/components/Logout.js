import React from "react";
import PropTypes from "prop-types";
import "../styles/style.css";

const Logout = ({ logout }) => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <button onClick={logout}>
            <i className="bx bx-log-out"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

Logout.propTypes = {
  logout: PropTypes.func,
};

export default Logout;
