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
  const [expanded, setExpanded] = useState(false); // NEW STATE

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "skills", "experience", "education", "projects", "contact"];
    const options = { threshold: 0.6 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, options);

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -150;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <Navbar expand="md" expanded={expanded} onToggle={setExpanded} className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {["home", "skills", "experience", "education", "projects"].map((section) => (
              <Nav.Link
                key={section}
                as={HashLink}
                smooth
                to={`#${section}`}
                scroll={(el) => {
                  scrollWithOffset(el);
                  setExpanded(false); 
                }}
                className={activeLink === section ? "active navbar-link" : "navbar-link"}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kian-miridoozini/" target="_blank" rel="noopener noreferrer" aria-label="Kian Miridoozini on LinkedIn">
                <img src={navIcon1} alt="link to Kian's LinkedIn" />
              </a>
              <a href="https://github.com/KianMiridoozini" target="_blank" rel="noopener noreferrer" aria-label="Kian Miridoozini on GitHub">
                <img src={navIcon2} alt="link to Kian's GitHub" />
              </a>
              <a href="mailto:kian.miridoozini@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email Kian Miridoozini">
                <img src={navIcon3} alt="link to Kian's email" />
              </a>
            </div>
            <HashLink
              smooth
              to="#contact"
              scroll={(el) => {
                scrollWithOffset(el);
                setExpanded(false); 
              }}
              className={activeLink === "contact" ? "active navbar-link" : "navbar-link"}
            >
              <button className="vvd" aria-label="Let's connect">
                <span>Let's Connect</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
