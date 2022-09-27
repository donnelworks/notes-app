import React, { useContext } from "react";
import { useInput } from "../hooks";
import Button from "./Button";
import Input from "./Input";
import PropTypes from "prop-types";
import { LocaleContext } from "../contexts/LocaleContext";
import { registerPage } from "../utils/content";
import "../styles/style.css";

const RegisterInput = ({ dataSubmit }) => {
  const { locale } = useContext(LocaleContext);
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const onDataSubmit = (e) => {
    e.preventDefault();
    dataSubmit({ name, email, password });
  };

  return (
    <>
      <form onSubmit={(e) => onDataSubmit(e)}>
        <Input
          type="text"
          value={name}
          onChange={onNameChange}
          placeholder={locale === "id" ? "Nama" : "Name"}
          icon="bx bx-user"
        />
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
        <div className="row justify-content-right">
          <Button type="submit">{registerPage[locale].button}</Button>
        </div>
      </form>
    </>
  );
};

RegisterInput.propTypes = {
  dataSubmit: PropTypes.func.isRequired,
};

export default RegisterInput;
