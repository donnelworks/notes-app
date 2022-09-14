import React from "react";
import Navigation from "./Navigation";
import Search from "./Search";

const Header = () => {
  return (
    <div className="header-container">
      <div className="row align-items-center">
        <h1 className="header-title">My Notes</h1>
        <div className="col">
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Header;
