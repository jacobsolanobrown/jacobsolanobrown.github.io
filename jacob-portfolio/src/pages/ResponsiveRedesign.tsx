import React from "react";
import { NavLink } from "react-router-dom";

const ResponsiveRedesign: React.FC = () => {
  return (
    <div>
      <h1>Responsive Redesign</h1>
      <div className="projects-content">
        <NavLink to="/tonysbigcheesepizzahomepage">
          <a>tony's big cheese pizza</a>
        </NavLink>
      </div>
    </div>
  );
};

export default ResponsiveRedesign;
