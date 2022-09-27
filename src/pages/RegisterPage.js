import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import RegisterInput from "../components/RegisterInput";
import { LocaleContext } from "../contexts/LocaleContext";
import { register } from "../utils/api";
import { registerPage } from "../utils/content";
import "../styles/style.css";

const RegisterPage = () => {
  const { locale } = useContext(LocaleContext);
  const navigate = useNavigate();
  const [alert, setAlert] = useState({ visible: false, msg: "" });

  const onSubmitHandler = async (note) => {
    const { error, msg } = await register(note);
    if (!error) {
      navigate("/");
    } else {
      setAlert({ ...alert, visible: true, msg: msg });
    }
  };
  return (
    <section className="register">
      <h4 className="note-section">{registerPage[locale].subtitle}</h4>
      <Alert
        show={alert.visible}
        msg={alert.msg}
        onClose={() => setAlert({ ...alert, visible: false, msg: "" })}
      />
      <RegisterInput dataSubmit={(note) => onSubmitHandler(note)} />
    </section>
  );
};

export default RegisterPage;
