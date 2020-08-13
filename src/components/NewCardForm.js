import React from "react";
import { useFormik } from "formik";
import styles from "./NewCardForm.module.css";
import OpenCard from "./OpenCard";
import firebase from "firebase";
import { useNavigate } from "react-router-dom";

function NewCardForm() {
  const formik = useFormik({
    initialValues: {
      sender: "grizz",
      recipient: "ice bear",
      bgText: "yass",
      title: "happy birthday",
      message: "hello my friend\n\nI think you are the best",
    },
    onSubmit: (values) => {
      console.log(values);
      firebase
        .firestore()
        .collection("card")
        .add({
          ...values,
          timestamp: Date.now(),
        })
        .then((response) => {
          navigate(`t/${response.id}`);
        });
    },
  });
  const navigate = useNavigate();

  return (
    <div id={styles.main}>
      <h1>
        <span role="img" aria-label="mailbox">
          📫
        </span>{" "}
        Send your friend an e-card{" "}
        <span role="img" aria-label="envelope">
          💌
        </span>
      </h1>
      <section>
        <form className={styles.cardForm} onSubmit={formik.handleSubmit}>
          <div className={styles.grid}>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="sender"
              name="sender"
              onChange={formik.handleChange}
              value={formik.values.sender}
            />
            <label htmlFor="recipient">Your friend's name</label>
            <input
              type="text"
              id="recipient"
              name="recipient"
              onChange={formik.handleChange}
              value={formik.values.recipient}
            />
            <label htmlFor="title">A title</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            <label htmlFor="bgText">A word to wave</label>
            <input
              type="text"
              id="bgText"
              name="bgText"
              onChange={formik.handleChange}
              value={formik.values.bgText}
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
            ></textarea>
          </div>
          <button type="submit">Create a Card</button>
        </form>
      </section>
      <hr />
      <h2>Preview: </h2>
      <section id={styles.preview}>
        <OpenCard
          bgWord={formik.values.bgText}
          header={formik.values.title}
          sender={formik.values.sender}
          recipient={formik.values.recipient}
          message={formik.values.message}
          isPreview={true}
        />
      </section>
    </div>
  );
}

export default NewCardForm;
