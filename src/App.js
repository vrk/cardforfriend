import React from "react";
import "./App.css";
import CardView from "./components/CardView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewCardForm from "./components/NewCardForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NewCardForm />} />
          <Route path="c/:id" children={<CardView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
