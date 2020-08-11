import React from "react";
import styles from "./CardViewStyles.module.css";

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

function Foreground({ header, children }) {
  return (
    <React.Fragment>
      <div id={styles.fgMessage}>
        <div>
          <h1>{header}</h1>
          {children}
        </div>
      </div>
      <div id={styles.fgFrom}>from vrk</div>
    </React.Fragment>
  );
}

function OpenCard({ bgWord, header, children }) {
  return (
    <div id={styles.card}>
      <Background word={bgWord} />
      <Foreground header={header}>{children}</Foreground>
    </div>
  );
}

export default OpenCard;
