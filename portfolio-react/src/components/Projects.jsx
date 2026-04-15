import React from 'react';
import { useNavigate } from 'react-router-dom';
import { allProjects, frontendTechs, backendTechs, realTimeTechs } from '../data.js';
import '../styles/Projects.css';

export function Projects() {
  const navigate = useNavigate();

  const handleTechClick = (tech) => {
    navigate(`/tech/${encodeURIComponent(tech)}`);
  };

  return (
    <section className="portfolio" id="project">
      <div className="container">
        <h2 className="he">Projects</h2>
        <p className="paragrph">
          Explore my projects organized by technology stack
        </p>

        {/* Frontend Section */}
        <div className="project-section">
          <h3 className="section-title">Frontend Projects</h3>
          <div className="tech-cards">
            {frontendTechs.map((tech) => (
              <div
                key={tech}
                className="tech-card"
                onClick={() => handleTechClick(tech)}
              >
                <h4>{tech}</h4>
                <p>View all {tech} projects</p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Section */}
        <div className="project-section">
          <h3 className="section-title">Backend Projects</h3>
          <div className="tech-cards">
            {backendTechs.map((tech) => (
              <div
                key={tech}
                className="tech-card"
                onClick={() => handleTechClick(tech)}
              >
                <h4>{tech}</h4>
                <p>View all {tech} projects</p>
              </div>
            ))}
          </div>
        </div>

        {/* Full Stack Section */}
        <div className="project-section">
          <h3 className="section-title">Full Stack Projects</h3>
          <div className="tech-cards">
            <div
              className="tech-card"
              onClick={() => handleTechClick('Full Stack')}
            >
              <h4>Full Stack</h4>
              <p>View all full stack projects</p>
            </div>
          </div>
        </div>

        {/* Real Time Projects Section */}
        <div className="project-section">
          <h3 className="section-title">Real Time Projects</h3>
          <div className="tech-cards">
            {realTimeTechs.map((tech) => (
              <div
                key={tech}
                className="tech-card"
                onClick={() => handleTechClick(tech)}
              >
                <h4>{tech}</h4>
                <p>View all {tech} projects</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
