import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { About } from './components/About.jsx';
import { Skills } from './components/Skills.jsx';
import { Resume } from './components/Resume.jsx';
import { Projects } from './components/Projects.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';
import { ProjectDetail } from './pages/ProjectDetail.jsx';
import { TechProjects } from './pages/TechProjects.jsx';
import './App.css';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll to top when navigating to different pages (not on hash changes)
    if (pathname === '/project/:id' || pathname.startsWith('/tech/')) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/tech/:tech" element={<TechProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
