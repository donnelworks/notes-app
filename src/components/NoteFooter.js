import React from "react";

const NoteFooter = () => {
  return (
    <div className="note-footer">
      <div className="row align-items-center justify-content-between">
        <button type="button" className="btn-action">
          <i className="bx bx-edit"></i>
        </button>
        <button type="button" className="btn-action">
          <i className="bx bx-archive-in"></i>
        </button>
        <button type="button" className="btn-action">
          <i className="bx bx-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default NoteFooter;
