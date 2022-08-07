import React, { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Modal from "./components/Modal";
import NoteList from "./components/NoteList";
import { getInitialData } from "./utils";

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  const filteredNotes = notes.filter((o) =>
    o.title.toLowerCase().includes(search.toString().toLowerCase())
  );
  const activeNotes = filteredNotes.filter((note) => note.archived == false);
  const archivedNotes = filteredNotes.filter((note) => note.archived == true);

  const onSubmitHandler = ({ title, content }) => {
    setNotes([
      ...notes,
      {
        id: +new Date(),
        title,
        body: content,
        createdAt: new Date().toISOString(),
        archived: false,
      },
    ]);
  };

  function onDeleteHandler(id) {
    const list = notes.filter((note) => note.id !== id);
    setNotes(list);
  }

  function onStatusHandler(id) {
    const data = notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotes(data);
  }

  const onSearch = (key) => {
    setSearch(key);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="main-container">
      <Header onSearch={(key) => onSearch(key.target.value)} />
      <Button type="button" onClick={() => openModal()}>
        <i className="fa fa-plus-circle fa-lg"></i>
        Buat catatan
      </Button>
      <h4 className="note-section">Catatan Aktif</h4>
      <NoteList
        data={activeNotes}
        onDelete={(id) => onDeleteHandler(id)}
        onStatus={(id) => onStatusHandler(id)}
      />
      <h4 className="note-section">Catatan Arsip</h4>
      <NoteList
        data={archivedNotes}
        onDelete={(id) => onDeleteHandler(id)}
        onStatus={(id) => onStatusHandler(id)}
      />

      {/* Modal */}
      <Modal
        title=""
        content=""
        show={showModal}
        noteSubmit={(data) => onSubmitHandler(data)}
        handleClose={() => closeModal()}
      />
    </div>
  );
};

export default App;
