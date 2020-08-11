import React from "react";
import "./App.css";
import CardView from "./components/CardView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="c/:id" element={<CardView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
