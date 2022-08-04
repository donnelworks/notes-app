import React from "react";
import { showFormattedDate } from "../utils";
import NoteFooter from "./NoteFooter";

const NoteItem = ({ id, title, body, createdAt, archived }) => {
  return (
    <div className="note-item">
      <h3 className="note-item-title">{title}</h3>
      <p className="note-item-date">{showFormattedDate(createdAt)}</p>
      <p className="note-item-content">{body}</p>
      <NoteFooter id={id} />
    </div>
  );
};

export default NoteItem;