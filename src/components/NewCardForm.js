import React, { Fragment } from "react";
import { useFormik } from "formik";
import styles from "./NewCardForm.module.css";
import OpenCard from "./OpenCard";

function NewCardForm() {
  const formik = useFormik({
    initialValues: {
      name: "grizz",
      friendName: "ice bear",
      bgText: "yass",
      title: "happy birthday",
      message: "hello my friend\n\nI think you are the best",
    },
  });
  return (
    <div id={styles.main}>
      <h1>📫 Send your friend an e-card 💌</h1>
      <section>
        <form className={styles.cardForm}>
          <div className={styles.grid}>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <label htmlFor="friendName">Your friend's name</label>
            <input
              type="text"
              id="friendName"
              name="friendName"
              onChange={formik.handleChange}
              value={formik.values.friendName}
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
          <button>Create a Card</button>
        </form>
      </section>
      <hr />
      <h2>Preview: </h2>
      <section id={styles.preview}>
        <OpenCard
          bgWord={formik.values.bgText}
          header={formik.values.title}
          sender={formik.values.name}
          recipient={formik.values.friendName}
          isPreview={true}
        >
          {messageToHTML(formik.values.message)}
        </OpenCard>
      </section>
    </div>
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

export default NewCardForm;
