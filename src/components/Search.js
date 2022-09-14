import React from "react";

const Search = ({ keyword, onSearch }) => {
  return (
    <div className="search-container align-items-center">
      <i className="fa fa-search"></i>
      <input
        value={keyword}
        className="search-input"
        placeholder="Cari judul catatan ..."
        onChange={(val) => onSearch(val)}
      />
    </div>
  );
};

export default Search;
