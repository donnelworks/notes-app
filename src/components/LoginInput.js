import React from "react";
import { Link } from "react-router-dom";
import { useInput } from "../hooks";
import Button from "./Button";
import Input from "./Input";
import PropTypes from "prop-types";

const LoginInput = ({ dataSubmit }) => {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const onDataSubmit = (e) => {
    e.preventDefault();
    dataSubmit({ email, password });
  };
  return (
    <>
      <form onSubmit={(e) => onDataSubmit(e)}>
        <Input
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
          icon="bx bx-envelope"
        />
        <Input
          type="password"
          value={password}
          onChange={onPasswordChange}
          maxLength={6}
          placeholder="Password (6 digits)"
          icon="bx bx-lock-alt"
        />
        <div className="row">
          <div className="col justify-content-center">
            <p>
              Belum punya akun?
              <Link to="/register">
                <strong> Buat akun</strong>
              </Link>
            </p>
          </div>
          <Button type="submit">Masuk</Button>
        </div>
      </form>
    </>
  );
};

LoginInput.propTypes = {
  dataSubmit: PropTypes.func.isRequired,
};

export default LoginInput;
