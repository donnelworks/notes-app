import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import Modal from "../components/Modal";
import NoteList from "../components/NoteList";
import Search from "../components/Search";
import PropTypes from "prop-types";
import { addNote, getActiveNotes, deleteNote, archiveNote } from "../utils/api";
import Loading from "../components/Loading";
import { LocaleContext } from "../contexts/LocaleContext";
import { homePage } from "../utils/content";
import "../styles/style.css";

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
  const { locale } = useContext(LocaleContext);
  let [activeNotes, setActiveNotes] = useState([]);
  const [keyword, setKeyword] = useState(defaultKeyword || "");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  activeNotes = activeNotes.filter((note) => {
    return note.title
      .toString()
      .toLowerCase()
      .includes(keyword.toString().toLowerCase());
  });

  useEffect(() => {
    loadActiveNotes();

    return () => {
      setActiveNotes([]);
    };
  }, []);

  async function loadActiveNotes() {
    const { data } = await getActiveNotes();
    setActiveNotes(data);
    setLoading(false);
  }

  async function onDeleteHandler(id) {
    await deleteNote(id);
    loadActiveNotes();
  }

  async function onStatusHandler(id) {
    await archiveNote(id);
    loadActiveNotes();
  }

  function onKeywordChangeHandler(val) {
    setKeyword(val);
    keywordChange(val);
  }

  const onSubmitHandler = async (note) => {
    await addNote(note);
    loadActiveNotes();
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
      <div className="row">
        <div className="col">
          <h4 className="note-section">{homePage[locale].subtitle}</h4>
        </div>
        <Button type="button" onClick={() => toggleModal(true)}>
          <i className="fa fa-plus-circle fa-lg"></i>
          {homePage[locale].button}
        </Button>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <NoteList
          data={activeNotes}
          onDelete={(id) => onDeleteHandler(id)}
          onStatus={(id) => onStatusHandler(id)}
        />
      )}

      {/* Modal */}
      <Modal
        show={showModal}
        noteSubmit={(data) => onSubmitHandler(data)}
        handleClose={() => toggleModal(false)}
      />
    </section>
  );
};

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
