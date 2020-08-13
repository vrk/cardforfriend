import React, { useState } from "react";
import OpenCard from "./OpenCard";
import Envelope from "./Envelope";
import style from "./CardView.module.css";

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
    <OpenCard
      bgWord="JAKE"
      header="happy birthday"
      sender="vrk"
      recipient="jake"
      message={"hello my friend\n\nI think you are the best"}
      isPreview={false}
    />
  );
  const displayEnvelope = !isFinished && (
    <Envelope onIsOpen={onIsOpen} onIsFinished={onIsFinished} />
  );

  return (
    <div className={style.cardView}>
      {displayCard}
      {displayEnvelope}
    </div>
  );
}

export default CardView;
