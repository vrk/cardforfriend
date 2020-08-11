import React, { Fragment, useState } from "react";
import OpenCard from "./OpenCard";
import Envelope from "./Envelope";

function CardView() {
  const [isOpen, setIsOpen] = useState(false);

  const display = isOpen ? (
    <OpenCard bgWord="jake" header="happy birthday">
      <p>hello my friend</p>

      <p>I think you are the best</p>
    </OpenCard>
  ) : (
    <Envelope />
  );

  return <Fragment>{display}</Fragment>;
}

export default CardView;
