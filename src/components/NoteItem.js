import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils/api";
import NoteFooter from "./NoteFooter";
import parser from "html-react-parser";
import PropTypes from "prop-types";
import { LocaleContext } from "../contexts/LocaleContext";
import "../styles/style.css";

const NoteItem = ({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onStatus,
}) => {
  const { locale } = useContext(LocaleContext);
  return (
    <div className="note-item">
      <h3 className="note-item-title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className="note-item-date">{showFormattedDate(createdAt, locale)}</p>
      <p className="note-item-content">{parser(body)}</p>
      <NoteFooter
        id={id}
        onDelete={onDelete}
        onStatus={onStatus}
        archived={archived}
      />
    </div>
  );
};

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onStatus: PropTypes.func.isRequired,
};

export default NoteItem;
