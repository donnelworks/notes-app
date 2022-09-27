import React from "react";
import PropTypes from "prop-types";
import "../styles/style.css";

const Button = ({ children, block, ...props }) => {
  const buttonClass = block ? "btn btn-block" : "btn";
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
