import React from "react";
import { showFormattedDate } from "../utils";

const NoteDetail = ({ title, body, createdAt }) => {
  return (
    <section className="note-detail">
      <h1 className="note-detail-title">{title}</h1>
      <p className="note-detail-date">{showFormattedDate(createdAt)}</p>
      <p>{body}</p>
    </section>
  );
};

export default NoteDetail;
