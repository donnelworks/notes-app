import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { getNote } from "../utils";
import PropTypes from "prop-types";

const DetailPageWrapper = () => {
  const { id } = useParams();
  return <DetailPage id={id} />;
};

const DetailPage = ({ id }) => {
  const [note, setNote] = useState(getNote(id));

  return (
    <section>
      <NoteDetail {...note} />
    </section>
  );
};

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailPageWrapper;