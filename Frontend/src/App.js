import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/PageComponents/Home";
import ViewDetailsPage from "./Components/PageComponents/ViewDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<ViewDetailsPage />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
