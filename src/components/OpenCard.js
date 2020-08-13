import React, { useState, useEffect, Fragment } from "react";
import styles from "./OpenCardStyles.module.css";

function OpenCard({ bgWord, header, sender, recipient, message, isPreview }) {
  const [cardClass, setCardClass] = useState("");
  useEffect(() => {
    setImmediate(() => setCardClass(styles.grow));
  }, []);
  console.log(recipient);
  return (
    <div
      id={styles.card}
      className={cardClass + (isPreview ? ` ${styles.preview}` : "")}
    >
      <Background word={bgWord} />
      <Foreground header={header} sender={sender} recipient={recipient}>
        {messageToHTML(message)}
      </Foreground>
    </div>
  );
}

export default OpenCard;

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

function Foreground({ header, children, sender, recipient }) {
  return (
    <React.Fragment>
      <div id={styles.fgMessage}>
        <div>
          <h1>{header}</h1>
          {children}
        </div>
      </div>
      <div id={styles.fgFrom}>sent with love from {sender}</div>
      <div id={styles.fgTo}>to {recipient}</div>
    </React.Fragment>
  );
}

const messageToHTML = (messagePlaintext) => {
  return messagePlaintext.split("\n").map((line, index) => {
    return (
      <Fragment key={index}>
        {line}
        <br />
      </Fragment>
    );
  });
};
