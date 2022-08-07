import React, { useState } from "react";
import Button from "./Button";

const Modal = ({ title, content, handleClose, show, noteSubmit }) => {
  const showModalClass = show ? "modal display-block" : "modal display-none";

  const [form, setForm] = useState({ title: title, content: content });
  const [titleMax, setTitleMax] = useState(0);

  const handleChangeTitle = (val) => {
    onChangeData(val, "title");
    setTitleMax(val.target.value.length);
  };

  const onChangeData = (val, input) => {
    setForm({
      ...form,
      [input]: val.target.value,
    });
  };

  const onSubmitData = (e) => {
    e.preventDefault();
    noteSubmit(form);
    setTitleMax(0);
    clearForm();
  };

  const clearForm = () => {
    setForm({
      title: "",
      content: "",
    });
  };

  return (
    <div className={showModalClass} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={(e) => onSubmitData(e)}>
          <div className="modal-header">
            <div className="col">
              <input
                type="text"
                className="modal-title"
                placeholder="Judul"
                maxLength={50}
                value={form.title}
                onChange={(val) => handleChangeTitle(val)}
              />
            </div>
            <p className="modal-title-count">{titleMax}/50</p>
            <button type="button" className="modal-close" onClick={handleClose}>
              <i className="fa fa-times fa-lg"></i>
            </button>
          </div>
          <div className="modal-body">
            <textarea
              value={form.content}
              onChange={(val) => onChangeData(val, "content")}
              placeholder="Buat catatan..."
            />
          </div>
          <div className="modal-footer">
            <Button type="submit" block>
              Simpan catatan
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
