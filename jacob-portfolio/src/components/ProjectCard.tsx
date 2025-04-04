import React from 'react';
import "../styles/ProjectCard.css";

interface ProjectCardProps {
    title: string;
    text: string;
    image: string;
    tags: string[];
}

// add a boolean making the image switch from right or left of the div that returns different stuff

const ProjectCard: React.FC<ProjectCardProps> = ({ title, text, image, tags }) => {
    return (
      <div className="project-card">
        <div className="project-card-image">
          <img src={image} alt={title} />
        </div>
        <div className="project-card-content">
          <h2 className="project-card-title">{title}</h2>
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