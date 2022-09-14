import React from "react";
import PropTypes from "prop-types";

const NoteFooter = ({ id, onDelete, onStatus, archived }) => {
  return (
    <div className="note-footer">
      <div className="row align-items-center justify-content-between">
        <button
          type="button"
          className="btn-action"
          onClick={() => onStatus(id)}
          title="Arsipkan"
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
          title="Hapus"
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
