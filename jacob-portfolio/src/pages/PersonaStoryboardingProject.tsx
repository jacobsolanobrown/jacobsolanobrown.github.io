import React from  "react";
import { Link } from "react-router-dom";

const PersonaStoryboardingProject: React.FC = () => {
    return (
      <div>
        <div>
          <h1>Persona Storyboarding Project</h1>
          <p>
            Persona Storyboarding Project is a project that I did for my
            Human-Computer Interaction class. In this project, I created a
            persona and a storyboard to illustrate the persona's experience with
            a product. The product that I chose was a mobile application that
            helps users find and book fitness classes. The persona that I
            created was a young professional who is looking to stay active and
            healthy but has a busy schedule. The storyboard that I created
            showed the persona using the mobile application to find and book a
            fitness class. The purpose of this project was to practice creating
            personas and storyboards to better understand the user experience
            and design of a product.
          </p>
        </div>
        <div>
          <img
            src="./src/assets/persona-storyboarding-assets/parent_empathy_map.jpg"
            alt=""
          />
          <img
            src="./src/assets/persona-storyboarding-assets/older_person_empathy_map.jpg"
            alt=""
          />
        </div>

        <Link to="/">Go back to the homepage</Link>
      </div>
    );
};

export default PersonaStoryboardingProject;