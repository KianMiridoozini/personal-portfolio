// NavBar.jsx
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/kian-logo-3.png';
import navIcon1 from '../../assets/img/linkedin-icon.svg';
import navIcon2 from '../../assets/img/github-icon.svg';
import navIcon3 from '../../assets/img/gmail-icon.svg';
import { HashLink } from 'react-router-hash-link';
import './NavBar.css';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Listener for adding a "scrolled" class
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer to detect which section is in view
  useEffect(() => {
    const sections = ["home", "skills", "education", "projects", "contact"];
    const options = {
      threshold: 0.6, // adjust this value as needed
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    // Clean up on unmount
    return () => observer.disconnect();
  }, []);

  // Optional: custom scroll function to adjust for fixed headers, etc.
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -150;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={HashLink}
                smooth
                to="#home"
                scroll={scrollWithOffset}
                className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                smooth
                to="#skills"
                scroll={scrollWithOffset}
                className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                smooth
                to="#education"
                scroll={scrollWithOffset}
                className={activeLink === "education" ? "active navbar-link" : "navbar-link"}
              >
                Education
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                smooth
                to="#projects"
                scroll={scrollWithOffset}
                className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/kian-miridoozini/" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="link to Kian's LinkedIn" />
                </a>
                <a href="https://github.com/KianMiridoozini" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon2} alt="link to Kian's GitHub" />
                </a>
                <a href="mailto:kian.miridoozini@gmail.com" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon3} alt="link to Kian's email" />
                </a>
              </div>
              <HashLink
                smooth
                to="#contact"
                scroll={scrollWithOffset}
                className={activeLink === "contact" ? "active navbar-link" : "navbar-link"}
              >
                <button className="vvd">
                  <span>Let's Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};
