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
          {/* <Search onSearch={onSearch} /> */}
        </div>
        <h5>Theme Mode</h5>
      </div>
    </div>
  );
};

export default Header;
