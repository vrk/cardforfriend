import React, { useState, useEffect } from "react";
import OpenCard from "./OpenCard";
import Envelope from "./Envelope";
import style from "./CardView.module.css";
import { useParams, useNavigate } from "react-router-dom";
import firebase from "firebase";

function CardView() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [bgWord, setBgWord] = useState("JAKE");
  const [header, setHeader] = useState("happy birthday");
  const [sender, setSender] = useState("vrk");
  const [recipient, setRecipient] = useState("jake");
  const [message, setMessage] = useState(
    "hello my friend\n\nI think you are the best"
  );
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("userid", id);

  useEffect(() => {
    firebase
      .firestore()
      .collection("card")
      .doc(id)
      .get()
      .then(function (doc) {
        const data = doc.data();
        setBgWord(data.bgText);
        setHeader(data.title);
        setSender(data.sender);
        setRecipient(data.recipient);
        setMessage(data.message);
        setIsLoaded(true);
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
        navigate("/");
      });
  }, [id, navigate]);

  const onIsOpen = () => {
    setIsOpen(true);
  };

  const onIsFinished = () => {
    setIsFinished(true);
  };

  const displayCard = isOpen && (
    <OpenCard
      bgWord={bgWord}
      header={header}
      sender={sender}
      recipient={recipient}
      message={message}
      isPreview={false}
    />
  );
  const displayEnvelope = !isFinished && (
    <Envelope
      onIsOpen={onIsOpen}
      onIsFinished={onIsFinished}
      recipient={recipient}
    />
  );

  return (
    isLoaded && (
      <div className={style.cardView}>
        {displayCard}
        {displayEnvelope}
      </div>
    )
  );
}

export default CardView;
