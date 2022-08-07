import React from "react";

const NoteFooter = ({ id, onDelete, onStatus, archived }) => {
  return (
    <div className="note-footer">
      <div className="row align-items-center justify-content-between">
        <button
          type="button"
          className="btn-action"
          onClick={() => onStatus(id)}
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
        >
          <i className="bx bx-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default NoteFooter;
