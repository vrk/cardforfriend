import React, { useState, useEffect } from "react";
import styles from "./OpenCardStyles.module.css";
import { Textfit } from "react-textfit";

function Background({ word }) {
  const AnimatedLetter = ({ letter, isEven }) => (
    <span className={isEven ? styles.flipLeft : styles.flipRight}>
      {letter}
    </span>
  );
  const letters = word.split("");
  const animatedWord = letters.map((l, index) => (
    <AnimatedLetter letter={l} key={index} isEven={index % 2 === 0} />
  ));
  return <div id={styles.bgLetters}>{animatedWord}</div>;
}

function Foreground({ header, children, sender }) {
  return (
    <React.Fragment>
      <div id={styles.fgMessage}>
        <div>
          <h1>{header}</h1>
          {children}
        </div>
      </div>
      <div id={styles.fgFrom}>sent with love from {sender}</div>
    </React.Fragment>
  );
}

function OpenCard({ bgWord, header, sender, children }) {
  const [cardClass, setCardClass] = useState("");
  useEffect(() => {
    setImmediate(() => setCardClass(styles.grow));
  }, []);
  return (
    <div id={styles.card} className={cardClass}>
      <Background word={bgWord} />
      <Foreground header={header} sender={sender}>
        {children}
      </Foreground>
    </div>
  );
}

export default OpenCard;
