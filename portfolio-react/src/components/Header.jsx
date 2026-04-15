import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

export function Header() {
  const [activeNav, setActiveNav] = React.useState('home');
  const navigate = useNavigate();

  const handleNavClick = (section) => {
    setActiveNav(section);
    if (section === 'home') {
      navigate('/');
      setTimeout(() => window.scrollTo(0, 0), 100);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="header">
      <div className="slider">
        <div className="container">
          <div className="intro">
            <h2>Web Developer <br /> Kalp Shah Portfolio</h2>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="container1">
          <img src="logo.jpg" alt="Logo" className="logo" />
          <ul>
            <li className={activeNav === 'home' ? 'active' : ''}>
              <a onClick={() => handleNavClick('home')} href="#home">Home</a>
            </li>
            <li className={activeNav === 'aboutme' ? 'active' : ''}>
              <a onClick={() => handleNavClick('aboutme')} href="#aboutme">About</a>
            </li>
            <li className={activeNav === 'skills' ? 'active' : ''}>
              <a onClick={() => handleNavClick('skills')} href="#skills">Skills</a>
            </li>
            <li className={activeNav === 'resume' ? 'active' : ''}>
              <a onClick={() => handleNavClick('resume')} href="#resume">Resume</a>
            </li>
            <li className={activeNav === 'project' ? 'active' : ''}>
              <a onClick={() => handleNavClick('project')} href="#project">Projects</a>
            </li>
            <li className={activeNav === 'contact' ? 'active' : ''}>
              <a onClick={() => handleNavClick('contact')} href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
