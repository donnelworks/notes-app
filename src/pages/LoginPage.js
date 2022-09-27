import React, { useState, useContext } from "react";
import Alert from "../components/Alert";
import LoginInput from "../components/LoginInput";
import { LocaleContext } from "../contexts/LocaleContext";
import { login } from "../utils/api";
import { loginPage } from "../utils/content";
import PropTypes from "prop-types";
import "../styles/style.css";

const LoginPage = ({ onLogin }) => {
  const { locale } = useContext(LocaleContext);
  const [alert, setAlert] = useState({ visible: false, msg: "" });

  const onSubmitHandler = async (note) => {
    const { error, data, msg } = await login(note);
    if (!error) {
      onLogin(data);
    } else {
      setAlert({ ...alert, visible: true, msg: msg });
    }
  };
  return (
    <section className="login">
      <h4 className="note-section">{loginPage[locale].subtitle} </h4>
      <Alert
        show={alert.visible}
        msg={alert.msg}
        onClose={() => setAlert({ ...alert, visible: false, msg: "" })}
      />
      <LoginInput dataSubmit={(note) => onSubmitHandler(note)} />
    </section>
  );
};

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
