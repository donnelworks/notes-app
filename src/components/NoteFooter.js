import React, { useContext } from "react";
import PropTypes from "prop-types";
import { LocaleContext } from "../contexts/LocaleContext";
import { note } from "../utils/content";
import "../styles/style.css";

const NoteFooter = ({ id, onDelete, onStatus, archived }) => {
  const { locale } = useContext(LocaleContext);
  return (
    <div className="note-footer">
      <div className="row align-items-center justify-content-between">
        <button
          type="button"
          className="btn-action"
          onClick={() => onStatus(id)}
          title={archived ? note[locale].active : note[locale].archive}
        >
          {archived ? (
            <i className="bx bx-archive-out"></i>
          ) : (
            <i className="bx bx-archive-in"></i>
          )}
        </button>
        <button
          type="button"
          className="btn-action"
          onClick={() => onDelete(id)}
          title={note[locale].delete}
        >
          <i className="bx bx-trash"></i>
        </button>
      </div>
    </div>
  );
};

NoteFooter.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onStatus: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default NoteFooter;
