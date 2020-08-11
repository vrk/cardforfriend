import React, { useState } from "react";
import styles from "./EnvelopeStyles.module.css";
import EnvelopeFrontSvg from "./EnvelopeFrontSvg.js";
import EnvelopeBackSvg from "./EnvelopeBackSvg.js";

function Envelope({ onIsOpen, onIsFinished }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const onClick = () => {
    setIsFlipped(true);
  };

  const onOpened = () => {
    console.log("is opened");
    setIsOpened(true);
    onIsOpen();
  };

  const onTransitionEnd = () => {
    if (isOpened) {
      console.log("meep");
      onIsFinished();
    }
  };

  const contentClassNames =
    styles.content + (isFlipped ? ` ${styles.rotate}` : "");
  return (
    <div
      className={styles.envelope + (isOpened ? ` ${styles.goAway}` : "")}
      onClick={onClick}
      onTransitionEnd={onTransitionEnd}
    >
      <div className={contentClassNames}>
        <EnvelopeFrontSvg className={styles.front} />
        <EnvelopeBackSvg className={styles.back}>{onOpened}</EnvelopeBackSvg>
      </div>
    </div>
  );
}

export default Envelope;
