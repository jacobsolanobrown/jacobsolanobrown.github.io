import React from "react";
import "./styles/App.css";
import "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AccessibleComponentsProject from "./pages/AccessibleComponentsProject";
import PersonaStoryboardingProject from "./pages/PersonaStoryboardingProject";
import ScrollToTop from "./components/ScrollToTop";
import TonysBigCheesePizzaHomepage from "./pages/TonysBigCheesePizzaHomepage";
import ResponsiveRedesign from "./pages/ResponsiveRedesign";

// Scroll to Top components helps the position of the page when navigating
// between different pages
const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/accessiblecomponentsproject"
          element={<AccessibleComponentsProject />}
        />
        <Route
          path="/personastoryboardingproject"
          element={<PersonaStoryboardingProject />}
        />
        <Route
          path="/tonysbigcheesepizzahomepage"
          element={<TonysBigCheesePizzaHomepage />}
        />
        <Route 
          path="/responsiveredesign"
          element={<ResponsiveRedesign />}
        />
      </Routes>
    </Router>
  );
};

export default App;
