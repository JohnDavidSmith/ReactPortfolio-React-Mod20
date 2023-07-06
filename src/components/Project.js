
import React from 'react';

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="project-link">Deployed Application</a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">GitHub Repository</a>
    </div>
  );
};

export default Project;

