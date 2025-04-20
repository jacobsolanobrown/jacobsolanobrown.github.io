import React from "react";
import "../styles/components/ProjectCard.css";
import { NavLink } from "react-router-dom";
import linkicon from "../assets/linkicon.svg";

interface ProjectCardProps {
  title: string;
  text: string;
  image: string;
  tags: string[];
  pageLink: string;
  imageOnRight?: boolean; // optional prop with a default of false
}

// add a boolean making the image switch from right or left of the div that returns different stuff

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  text,
  image,
  tags,
  pageLink,
  imageOnRight = false, // default to false if not provided
}) => {
  // We use CSS reversing to achieve image on the right effect
  return (
    // if 'image-on-right' is true then append image-on-right class, otherwise leave blank
    <div className={`project-card ${imageOnRight ? "image-on-right" : ""}`}>
      <div className="project-card-blue-blur"></div>
      <div className="project-card-blue-blur2"></div>
        <div className="project-card-image">
          <img src={image} alt={title} />
        </div>
        <div className="project-card-content">
          <h2 className="project-card-title">
            <NavLink to={pageLink}>
              <a>
                {title}
                <img src={linkicon} alt="Blue icon for a link icon" />
              </a>
            </NavLink>
          </h2>
          <p className="project-card-text">{text}</p>
          <div className="project-card-tags">
            {tags.map((tag, index) => (
              <span key={index} className="project-card-tag">
                {tag}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
