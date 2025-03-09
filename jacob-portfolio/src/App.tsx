import React from "react";
import "./styles/App.css";
import "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AccessibleComponentsProject from "./pages/AccessibleComponentsProject";
import PersonaStoryboardingProject from "./pages/PersonaStoryboardingProject";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/accessiblecomponentsproject" element={<AccessibleComponentsProject />} />
        <Route path="/personastoryboardingproject" element={<PersonaStoryboardingProject />} />
      </Routes>
    </Router>
  );
};


export default App;
