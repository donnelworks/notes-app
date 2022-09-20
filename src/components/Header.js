import React from "react";
import Navigation from "./Navigation";
import Logout from "./Logout";
import PropTypes from "prop-types";
import ToggleTheme from "./ToggleTheme";

const Header = ({ user, logout }) => {
  return (
    <div className="header-container">
      <div className="row align-items-center">
        <h1 className="header-title">My Notes</h1>
        {user !== null ? (
          <>
            <div className="col">
              <Navigation />
            </div>
            <ToggleTheme />
            <Logout logout={logout} />
          </>
        ) : (
          <div className="col text-right">
            <ToggleTheme />
          </div>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.string,
  logout: PropTypes.func,
};

export default Header;
