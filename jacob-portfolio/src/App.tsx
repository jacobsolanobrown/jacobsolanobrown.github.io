import React from "react";
import "./styles/App.css";
import "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AccessibleComponentsProject from "./pages/AccessibleComponentsProject";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/accessiblecomponentsproject" element={<AccessibleComponentsProject />} />
      </Routes>
    </Router>
  );
};


export default App;
