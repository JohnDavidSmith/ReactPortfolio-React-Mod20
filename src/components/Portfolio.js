
import React from 'react';
import Project from './Project';
import demoImage from '../Assets/00-demo.gif';
import demoImageBook from '../Assets/bookhome.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'Just Another Text Editor',
      image: demoImage,
      deployedLink: 'https://intense-sierra-06947-901fe1a395cd.herokuapp.com/',
      githubLink: 'https://github.com/JohnDavidSmith/TextEditor-Mod19-PWA'
    },
    {
      title: 'Book DataBase',
      image: demoImageBook,
      deployedLink: 'https://stormy-atoll-29529-b51ffbbd6de0.herokuapp.com/',
      githubLink: 'https://github.com/JohnDavidSmith/Book-Database'
    },
    // Add more project objects as needed
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          deployedLink={project.deployedLink}
          githubLink={project.githubLink}
        />
      ))}
    </section>
  );
};

export default Portfolio;

