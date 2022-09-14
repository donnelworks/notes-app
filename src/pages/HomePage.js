import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import Modal from "../components/Modal";
import NoteList from "../components/NoteList";
import Search from "../components/Search";
import { addNote, archiveNote, deleteNote, getActiveNotes } from "../utils";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

const HomePage = ({ defaultKeyword, keywordChange }) => {
  let [activeNotes, setActiveNotes] = useState(getActiveNotes());
  const [keyword, setKeyword] = useState(defaultKeyword || "");
  const [showModal, setShowModal] = useState(false);

  activeNotes = activeNotes.filter((note) => {
    return note.title
      .toString()
      .toLowerCase()
      .includes(keyword.toString().toLowerCase());
  });

  function onDeleteHandler(id) {
    deleteNote(id);
    setActiveNotes(getActiveNotes());
  }

  function onStatusHandler(id) {
    archiveNote(id);
    setActiveNotes(getActiveNotes());
  }

  function onKeywordChangeHandler(val) {
    setKeyword(val);
    keywordChange(val);
  }

  const onSubmitHandler = (data) => {
    addNote(data);
    setActiveNotes(getActiveNotes());
  };

  const toggleModal = (toggle) => {
    toggle ? setShowModal(true) : setShowModal(false);
  };

  return (
    <section>
      <Search
        keyword={keyword}
        onSearch={(key) => onKeywordChangeHandler(key.target.value)}
      />
      <Button type="button" onClick={() => toggleModal(true)}>
        <i className="fa fa-plus-circle fa-lg"></i>
        Buat catatan
      </Button>
      <h4 className="note-section">Catatan Aktif</h4>
      <NoteList
        data={activeNotes}
        onDelete={(id) => onDeleteHandler(id)}
        onStatus={(id) => onStatusHandler(id)}
      />

      {/* Modal */}
      <Modal
        title=""
        content=""
        show={showModal}
        noteSubmit={(data) => onSubmitHandler(data)}
        handleClose={() => toggleModal(false)}
      />
    </section>
  );
};

export default HomePageWrapper;
