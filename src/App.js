import React, { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Modal from "./components/Modal";
import NoteList from "./components/NoteList";
import { getInitialData } from "./utils";

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="main-container">
      <Header />
      <Button onClick={() => openModal()} />
      <NoteList data={notes} />
      <Modal
        title="Tambah catatan"
        show={showModal}
        handleClose={() => closeModal()}
      >
        Test
      </Modal>
    </div>
  );
};

export default App;
