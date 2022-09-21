import React, { useContext } from "react";
import Navigation from "./Navigation";
import Logout from "./Logout";
import PropTypes from "prop-types";
import Setting from "./Setting";
import { LocaleContext } from "../contexts/LocaleContext";

const Header = ({ user, logout }) => {
  const { locale } = useContext(LocaleContext);
  return (
    <div className="header-container">
      <div className="row align-items-center">
        <h1 className="header-title">
          {locale === "id" ? "Catatanku" : "My Notes"}
        </h1>
        {user !== null ? (
          <>
            <div className="col">
              <Navigation />
            </div>
            <Setting />
            <Logout logout={logout} />
          </>
        ) : (
          <div className="col text-right">
            <Setting />
          </div>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

export default Header;
