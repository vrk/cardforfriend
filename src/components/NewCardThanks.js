import React from "react";
import { useParams, Link } from "react-router-dom";

function NewCardThanks() {
  const { id } = useParams();
  return (
    <div>
      <h1>Congrats on your card</h1>
      <p>
        <Link to={`/c/${id}`}>See your new card</Link>
      </p>
    </div>
  );
}

export default NewCardThanks;
