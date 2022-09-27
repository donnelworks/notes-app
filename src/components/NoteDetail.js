import React, { useContext } from "react";
import { showFormattedDate } from "../utils/api";
import PropTypes from "prop-types";
import parser from "html-react-parser";
import { LocaleContext } from "../contexts/LocaleContext";
import "../styles/style.css";

const NoteDetail = ({ title, body, createdAt }) => {
  const { locale } = useContext(LocaleContext);
  return (
    <section className="note-detail">
      <h1 className="note-detail-title">{title}</h1>
      <p className="note-detail-date">{showFormattedDate(createdAt, locale)}</p>
      <p>{parser(body)}</p>
    </section>
  );
};

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
};

export default NoteDetail;
