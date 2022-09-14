import React from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils";
import NoteFooter from "./NoteFooter";
import parser from "html-react-parser";
import PropTypes from "prop-types";

const NoteItem = ({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onStatus,
}) => {
  return (
    <div className="note-item">
      <h3 className="note-item-title">
        <Link to={`/note/${id}`}>{title}</Link>
      </h3>
      <p className="note-item-date">{showFormattedDate(createdAt)}</p>
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
