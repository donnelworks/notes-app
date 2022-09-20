import React, { useState } from "react";
import Alert from "../components/Alert";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/api";

const LoginPage = ({ onLogin }) => {
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
      <h4 className="note-section">Masuk dengan akun kamu</h4>
      <Alert
        show={alert.visible}
        msg={alert.msg}
        onClose={() => setAlert({ ...alert, visible: false, msg: "" })}
      />
      <LoginInput dataSubmit={(note) => onSubmitHandler(note)} />
    </section>
  );
};

export default LoginPage;
