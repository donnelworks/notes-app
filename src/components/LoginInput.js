import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useInput } from "../hooks";
import Button from "./Button";
import Input from "./Input";
import PropTypes from "prop-types";
import { LocaleContext } from "../contexts/LocaleContext";
import { loginPage } from "../utils/content";
import "../styles/style.css";

const LoginInput = ({ dataSubmit }) => {
  const { locale } = useContext(LocaleContext);
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
              {loginPage[locale].question}
              <Link to="/register">
                <strong> {loginPage[locale].link}</strong>
              </Link>
            </p>
          </div>
          <Button type="submit">{loginPage[locale].button}</Button>
        </div>
      </form>
    </>
  );
};

LoginInput.propTypes = {
  dataSubmit: PropTypes.func.isRequired,
};

export default LoginInput;
