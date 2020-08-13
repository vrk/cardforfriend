import React from "react";
import { useFormik } from "formik";
import styles from "./NewCardForm.module.css";
import CardView from "./CardView";
import OpenCard from "./OpenCard";

function NewCardForm() {
  const formik = useFormik({});
  return (
    <div id={styles.main}>
      <h1>📫 Send your friend an e-card 💌</h1>
      <section>
        <form className={styles.cardForm}>
          <div className={styles.grid}>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="friendName">Your friend's name</label>
            <input type="text" id="friendName" name="friendName" />
            <label htmlFor="bgText">A title</label>
            <input type="text" id="bgText" name="bgText" />
            <label htmlFor="bgText">A word to wave</label>
            <input type="text" id="bgText" name="bgText" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button>Create a Card</button>
        </form>
      </section>
      <hr />
      <h2>Preview: </h2>
      <section id={styles.preview}>
        <OpenCard
          bgWord="JAKE"
          header="happy birthday"
          sender="vrk"
          isPreview={true}
        >
          <p>hello my friend</p>

          <p>I think you are the best</p>
        </OpenCard>
      </section>
    </div>
  );
}

export default NewCardForm;
