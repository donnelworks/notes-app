import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LocaleContext } from "../contexts/LocaleContext";
import "../styles/style.css";

const Navigation = () => {
  const { locale } = useContext(LocaleContext);
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">{locale === "id" ? "Aktif" : "Active"}</Link>
        </li>
        <li>
          <Link to="/arsip">{locale === "id" ? "Arsip" : "Archive"}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
