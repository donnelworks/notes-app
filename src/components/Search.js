import React from "react";

const Search = ({ onSearch }) => {
  return (
    <div className="search-container align-items-center">
      <i className="fa fa-search"></i>
      <input
        className="search-input"
        placeholder="Cari catatan ..."
        onChange={(val) => onSearch(val)}
      />
    </div>
  );
};

export default Search;
