import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useInput } from "../hooks";

const LoginPage = () => {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  return (
    <section className="login">
      <h4 className="note-section">Masuk dengan akun kamu</h4>
      <form>
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
          placeholder="Password"
          icon="bx bx-lock-alt"
        />
        <Button type="submit" block>
          Masuk
        </Button>
      </form>
    </section>
  );
};

export default LoginPage;
