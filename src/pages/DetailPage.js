import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { getNote } from "../utils/api";
import PropTypes from "prop-types";
import Loading from "../components/Loading";
import "../styles/style.css";

const DetailPageWrapper = () => {
  const { id } = useParams();
  return <DetailPage id={id} />;
};

const DetailPage = ({ id }) => {
  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDetailNote();

    return () => {
      setNote({});
    };
  }, []);

  async function loadDetailNote() {
    const { data } = await getNote(id);
    setNote(data);
    setLoading(false);
  }

  if (loading) {
    return <Loading />;
  }

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
