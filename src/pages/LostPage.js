import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { LocaleContext } from "../contexts/LocaleContext";
import { lostPage } from "../utils/content";

const LostPage = () => {
  const { locale } = useContext(LocaleContext);
  return (
    <section className="lost-page">
      <h1>404</h1>
      <h2>{lostPage[locale].congrats}</h2>
      <p>{lostPage[locale].detail}</p>
      <Link to="/">
        <Button type="button">{lostPage[locale].button}</Button>
      </Link>
    </section>
  );
};

export default LostPage;
