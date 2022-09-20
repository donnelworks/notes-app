import React from "react";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";
import parser from "html-react-parser";

const NoteDetail = ({ title, body, createdAt }) => {
  return (
    <section className="note-detail">
      <h1 className="note-detail-title">{title}</h1>
      <p className="note-detail-date">{showFormattedDate(createdAt)}</p>
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
