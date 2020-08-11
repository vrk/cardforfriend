import React, { Fragment, useState, useEffect } from "react";
import OpenCard from "./OpenCard";
import Envelope from "./Envelope";

function CardView() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const onIsOpen = () => {
    setIsOpen(true);
  };

  const onIsFinished = () => {
    setIsFinished(true);
  };

  const displayCard = isOpen && (
    <OpenCard bgWord="jake englund" header="happy birthday">
      <p>hello my friend</p>

      <p>I think you are the best</p>

      <p>
        <br />
        -- from vrk
      </p>
    </OpenCard>
  );
  const displayEnvelope = !isFinished && (
    <Envelope onIsOpen={onIsOpen} onIsFinished={onIsFinished} />
  );

  return (
    <Fragment>
      {displayCard}
      {displayEnvelope}
    </Fragment>
  );
}

export default CardView;
