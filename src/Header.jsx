import React, { useState, useEffect } from 'react';
import './header.css'; // Import your CSS file for styling
import { Link , useLocation} from 'react-router-dom';

function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Define menuOpen state variable
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        // Scroll to the target element's top position
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const scrollToProjects = () =>{
    const projectSection = document.getElementById('projects');
    if(projectSection){
      projectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  }
  const scrollToContact = () =>{
    const contactSection = document.getElementById('contact');
    if(contactSection){
      contactSection.scrollIntoView({behavior: 'smooth' , block:'start'});
      setMenuOpen(false);
    }
  }
  return (
    <div className={`header ${scrolling ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="logo">
          <Link to="/#home" onClick={scrollToTop}><img src="src\assets\react.svg" alt="Logo"/></Link>
        </div>
        <div className={`menu-bars ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
          <li><a href={`${window.location.origin}#about`} onClick={scrollToAbout}>About</a></li>
          <li><a href={`${window.location.origin}#projects`} onClick={scrollToProjects}>Projects</a></li>
          <li><a href="#contact" onClick={scrollToContact}>Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
