import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import Search from "../components/Search";
import { deleteNote, getArchivedNotes, unarchiveNote } from "../utils";
import PropTypes from "prop-types";

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
  let [archiveNotes, setArchiveNotes] = useState(getArchivedNotes());
  const [keyword, setKeyword] = useState(defaultKeyword || "");

  archiveNotes = archiveNotes.filter((note) => {
    return note.title
      .toString()
      .toLowerCase()
      .includes(keyword.toString().toLowerCase());
  });

  function onDeleteHandler(id) {
    deleteNote(id);
    setArchiveNotes(getArchivedNotes());
  }

  function onStatusHandler(id) {
    unarchiveNote(id);
    setArchiveNotes(getArchivedNotes());
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
      <h4 className="note-section">Catatan Arsip</h4>
      <NoteList
        data={archiveNotes}
        onDelete={(id) => onDeleteHandler(id)}
        onStatus={(id) => onStatusHandler(id)}
      />
    </section>
  );
};

ArchivePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default ArchivePageWrapper;
