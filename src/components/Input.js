import React from "react";
import PropTypes from "prop-types";

const Input = ({ icon, ...props }) => {
  return (
    <div className="input-container align-items-center">
      {icon && <i className={icon}></i>}
      <input className="input" {...props} />
    </div>
  );
};

Input.propTypes = {
  icon: PropTypes.string,
};

export default Input;
