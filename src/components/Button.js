import React from "react";
import PropTypes from "prop-types";

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
