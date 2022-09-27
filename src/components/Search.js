import React, { useContext } from "react";
import PropTypes from "prop-types";
import { LocaleContext } from "../contexts/LocaleContext";
import "../styles/style.css";

const Search = ({ keyword, onSearch }) => {
  const { locale } = useContext(LocaleContext);
  return (
    <div className="search-container align-items-center">
      <i className="fa fa-search"></i>
      <input
        value={keyword}
        className="search-input"
        placeholder={
          locale === "id" ? "Cari judul catatan ..." : "Search title ..."
        }
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
