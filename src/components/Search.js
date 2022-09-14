import React from "react";
import PropTypes from "prop-types";

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

Search.propTypes = {
  keyword: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default Search;
