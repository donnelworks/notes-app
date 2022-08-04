import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ data }) => {
  return (
    <div className="note-list">
      {data.map((note) => (
        <NoteItem key={note.id} id={note.id} {...note} />
      ))}
    </div>
  );
};

export default NoteList;
