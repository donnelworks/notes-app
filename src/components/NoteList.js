import React from "react";
import NoteItem from "./NoteItem";
import EmptyNote from "./EmptyNote";
import PropTypes from "prop-types";
import "../styles/style.css";

const NoteList = ({ data, onDelete, onStatus }) => {
  const length = data.length;
  return (
    <>
      {length > 0 ? (
        <div className="note-list">
          {data.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              archived={note.archived}
              onDelete={() => onDelete(note.id)}
              onStatus={() => onStatus(note.id)}
              {...note}
            />
          ))}
        </div>
      ) : (
        <EmptyNote />
      )}
    </>
  );
};

NoteList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
  onStatus: PropTypes.func.isRequired,
};

export default NoteList;
