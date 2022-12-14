import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import Search from "../components/Search";
import { deleteNote, getArchivedNotes, unarchiveNote } from "../utils/api";
import PropTypes from "prop-types";
import Loading from "../components/Loading";
import { LocaleContext } from "../contexts/LocaleContext";
import { archivePage } from "../utils/content";
import "../styles/style.css";

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

const ArchivePage = ({ defaultKeyword, keywordChange }) => {
  const { locale } = useContext(LocaleContext);
  let [archiveNotes, setArchiveNotes] = useState([]);
  const [keyword, setKeyword] = useState(defaultKeyword || "");
  const [loading, setLoading] = useState(true);

  archiveNotes = archiveNotes.filter((note) => {
    return note.title
      .toString()
      .toLowerCase()
      .includes(keyword.toString().toLowerCase());
  });

  useEffect(() => {
    loadArchieveNotes();

    return () => {
      setArchiveNotes([]);
    };
  }, []);

  async function loadArchieveNotes() {
    const { data } = await getArchivedNotes();
    setArchiveNotes(data);
    setLoading(false);
  }

  async function onDeleteHandler(id) {
    await deleteNote(id);
    loadArchieveNotes();
  }

  async function onStatusHandler(id) {
    await unarchiveNote(id);
    loadArchieveNotes();
  }

  function onKeywordChangeHandler(val) {
    setKeyword(val);
    keywordChange(val);
  }

  return (
    <section>
      <Search
        keyword={keyword}
        onSearch={(key) => onKeywordChangeHandler(key.target.value)}
      />
      <h4 className="note-section">{archivePage[locale].subtitle}</h4>
      {loading ? (
        <Loading />
      ) : (
        <NoteList
          data={archiveNotes}
          onDelete={(id) => onDeleteHandler(id)}
          onStatus={(id) => onStatusHandler(id)}
        />
      )}
    </section>
  );
};

ArchivePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default ArchivePageWrapper;
