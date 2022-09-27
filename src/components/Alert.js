import React from "react";
import PropTypes from "prop-types";
import "../styles/style.css";

const Alert = ({ show, msg, onClose }) => {
  const visible = show
    ? "alert alert-danger display-block"
    : "alert alert-danger display-none";

  return (
    <div className={visible}>
      <div className="row">
        <div className="col">{msg}</div>
        <button type="button" className="alert-close" onClick={onClose}>
          <i className="fa fa-times fa-lg"></i>
        </button>
      </div>
    </div>
  );
};

Alert.propTypes = {
  msg: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Alert;
