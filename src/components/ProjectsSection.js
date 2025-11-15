import React from 'react';

const ProjectsSection = () => {
  // Новые проекты
  const projects = [
    {
      id: 1,
      title: "alex-foto",
      description: "",
      technologies: "React, JavaScript, CSS",
      image: process.env.PUBLIC_URL + "/images/alex-foto.jpg",
      demoUrl: "https://me-port-pied.vercel.app"
    },
    {
      id: 2,
      title: "sofia-rose",
      description: "",
      technologies: "React, JavaScript, CSS",
      image: process.env.PUBLIC_URL + "/images/sofia-rose.jpg",
      demoUrl: "https://ppport1.vercel.app"
    },
    {
      id: 3,
      title: "Wash Working",
      description: "",
      technologies: "React, JavaScript, CSS",
      image: process.env.PUBLIC_URL + "/images/Wash Working.png",
      demoUrl: "#"
    },
    {
      id: 4,
      title: "Design Card",
      description: "",
      technologies: "React, JavaScript, CSS",
      image: process.env.PUBLIC_URL + "/images/Design Card.png",
      demoUrl: "#"
    }
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2>Мои проекты</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="technologies"><strong>Технологии:</strong> {project.technologies}</p>
                <div className="project-links">
                  <a href={project.demoUrl} className="btn" target="_blank" rel="noopener noreferrer">Подробнее</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;