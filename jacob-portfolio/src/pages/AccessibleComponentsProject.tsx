import React from "react";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";
import "../styles/AccessibleComponentsPage.css";


const AccessibleComponentsProject: React.FC = () => {
  return (
    <div>
      <main>
        <section>
          <h1>Accessible Components Assignment - CS1300 </h1>
          <h2>Chosen Component: Accordion</h2>
          <p>hi.. </p>
        </section>
      </main>
      <footer>
        <p>
          <Link to="/">&copy; 2025 jacob solano</Link>
        </p>
      </footer>
    </div>
  );
};

export default AccessibleComponentsProject;
