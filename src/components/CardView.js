import React, { Fragment, useState } from "react";
import OpenCard from "./OpenCard";
import Envelope from "./Envelope";

function CardView({ match }) {
  console.log(match);
  const [isOpen, setIsOpen] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const onIsOpen = () => {
    setIsOpen(true);
  };

  const onIsFinished = () => {
    setIsFinished(true);
  };

  const displayCard = isOpen && (
    <OpenCard bgWord="JAKE" header="happy birthday" sender="vrk">
      <p>hello my friend</p>

      <p>I think you are the best</p>
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
