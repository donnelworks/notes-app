import React from "react";
import { useInput } from "../hooks";
import Button from "./Button";
import Input from "./Input";
import PropTypes from "prop-types";

const RegisterInput = ({ dataSubmit }) => {
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
          placeholder="Name"
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
          <Button type="submit">Buat akun</Button>
        </div>
      </form>
    </>
  );
};

RegisterInput.propTypes = {
  dataSubmit: PropTypes.func.isRequired,
};

export default RegisterInput;