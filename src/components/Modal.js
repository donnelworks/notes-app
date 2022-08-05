import React from "react";

const Modal = ({ title, handleClose, show, children }) => {
  const showModalClass = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showModalClass}>
      <div className="modal-content">
        <div className="modal-header">
          <div className="col">
            <input
              type="text"
              className="modal-title"
              placeholder="Judul catatan..."
            />
          </div>
          <p className="modal-title-count">50/50</p>
          <button type="button" className="modal-close" onClick={handleClose}>
            <i className="fa fa-times fa-lg"></i>
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
