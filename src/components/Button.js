import React from "react";

const Button = ({ ...props }) => {
  return (
    <button type="button" className="btn" {...props}>
      <i className="fa fa-plus-circle fa-lg"></i>
      Buat catatan
    </button>
  );
};

export default Button;
