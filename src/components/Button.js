import React from "react";

const Button = ({ type, children, block, ...props }) => {
  const buttonClass = block ? "btn btn-block" : "btn";
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
