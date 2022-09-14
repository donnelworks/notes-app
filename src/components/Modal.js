import React, { useState } from "react";
import { useRef } from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import Alert from "./Alert";

const Modal = ({ handleClose, show, noteSubmit }) => {
  const showModalClass = show ? "modal display-block" : "modal display-none";
  const bodyRef = useRef("");

  const [form, setForm] = useState({ title: "", content: "" });
  const [alertVisible, setAlertVisible] = useState(false);
  const [titleMax, setTitleMax] = useState(0);

  const handleChangeTitle = (val) => {
    onChangeData(val, "title");
    setTitleMax(val.length);
  };

  const onChangeData = (val, input) => {
    setForm({
      ...form,
      [input]: val,
    });
  };

  const onSubmitData = (e) => {
    e.preventDefault();
    if (form.title == "") {
      setAlertVisible(true);
    } else {
      noteSubmit(form);
      setAlertVisible(false);
      setTitleMax(0);
      clearForm();
    }
  };

  const clearForm = () => {
    setForm({
      title: "",
      content: (bodyRef.current.innerHTML = ""),
    });
  };

  return (
    <div className={showModalClass} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Alert
          show={alertVisible}
          msg="Judul catatan harus diisi"
          onClose={() => setAlertVisible(false)}
        />
        <form onSubmit={(e) => onSubmitData(e)}>
          <div className="modal-header">
            <div className="col">
              <input
                type="text"
                className="modal-title"
                placeholder="Judul"
                maxLength={50}
                value={form.title}
                onChange={(val) => handleChangeTitle(val.target.value)}
              />
            </div>
            <p className="modal-title-count">{titleMax}/50</p>
            <button type="button" className="modal-close" onClick={handleClose}>
              <i className="fa fa-times fa-lg"></i>
            </button>
          </div>
          <div
            ref={bodyRef}
            value={form.content}
            className="modal-body"
            onInput={(e) => onChangeData(e.target.innerHTML, "content")}
            data-placeholder="Buat catatan..."
            contentEditable
          />
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

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  noteSubmit: PropTypes.func.isRequired,
};

export default Modal;
