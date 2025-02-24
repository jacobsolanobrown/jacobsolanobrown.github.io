import React from "react";
import { Link } from "react-router-dom";
import "../styles/AccessibleComponentsPage.css";

const AccessibleComponentsProject: React.FC = () => {
  return (
    <div>
      <main>
        <div className="acc-nav-bar">
          <div className="acc-nav-links">
            <a href="#01">intro</a>
            <a href="#02">design</a>
            <a href="#03">redesign</a>
            <a href="#04">summary</a>
          </div>
        </div>
        <section id="00" className="title-section">
          <h1>Accessible Components Assignment - CS1300 </h1>
        </section>
        <section id="01" className="intro-section">
          <h1>01. Introduction</h1>
          <p>Chosen Component: Accordion</p>
        </section>
        <section id="02" className="io-section">
          <h1>02. Understanding Input/Output Design</h1>
        </section>
        <section id="03" className="redesign-section">
          <h1>03. Component Redesign</h1>
        </section>
        <section id="04" className="summary-section">
          <h1>04. Summary</h1>
        </section>
      </main>
      <footer>
        <p>
          <Link to="/#landing-page">&copy; 2025 jacob solano</Link>
        </p>
      </footer>
    </div>
  );
};

export default AccessibleComponentsProject;
