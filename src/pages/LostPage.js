import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const LostPage = () => {
  return (
    <section className="lost-page">
      <h1>404</h1>
      <h2>Selamat! Kamu menemukan One Piece!</h2>
      <p>Ayo kembali berlayar dan menjadi hokage!</p>
      <Link to="/">
        <Button type="button">Kembali</Button>
      </Link>
    </section>
  );
};

export default LostPage;
