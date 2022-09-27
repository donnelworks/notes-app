import React, { useContext } from "react";
import { LocaleContext } from "../contexts/LocaleContext";
import { note } from "../utils/content";
import "../styles/style.css";

const EmptyNote = () => {
  const { locale } = useContext(LocaleContext);
  return (
    <div className="row">
      <div className="col">
        <p className="empty-note text-center">{note[locale].empty}</p>
      </div>
    </div>
  );
};

export default EmptyNote;
