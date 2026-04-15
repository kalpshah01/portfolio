import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allProjects } from '../data.js';
import '../styles/ProjectDetail.css';

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = allProjects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="project-detail-error">
        <h2>Project Not Found</h2>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  return (
    <section className="project-detail">
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/')}>← Back</button>

        <div className="detail-content">
          <div className="detail-image">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="detail-info">
            <h1>{project.title}</h1>
            <p className="description">{project.description}</p>

            <div className="tech-section">
              <h3>Technologies Used:</h3>
              <div className="tech-list">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-category">
              <p><strong>Project Type:</strong> {project.category.charAt(0).toUpperCase() + project.category.slice(1)}</p>
            </div>

            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
              View Live Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
