import React from "react";
import "./App.css";
import CardView from "./components/CardView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewCardForm from "./components/NewCardForm";
import firebase from "firebase";
import NewCardThanks from "./components/NewCardThanks";

const firebaseConfig = {
  apiKey: "AIzaSyDywLcVUwX3MmmmjWCIa4BSEzVkUTb6t_c",
  authDomain: "ecard-db-c7bd7.firebaseapp.com",
  databaseURL: "https://ecard-db-c7bd7.firebaseio.com",
  projectId: "ecard-db-c7bd7",
  storageBucket: "ecard-db-c7bd7.appspot.com",
  messagingSenderId: "869819327486",
  appId: "1:869819327486:web:4c960834973946473e56af",
};
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NewCardForm />} />
          <Route path="t/:id" children={<NewCardThanks />} />
          <Route path="c/:id" children={<CardView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
