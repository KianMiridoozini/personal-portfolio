import React, { useState, useEffect } from 'react';
import './App.css';
import { NavBar } from './components/nav/NavBar';
import { Banner } from './components/banner/Banner';
import { Projects } from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import  ContactForm  from './components/contact/Contact';
import { Footer } from './components/footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const simulatedDelay = 500;

    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true);
        // After the fade-out animation is finished, remove the overlay
        setTimeout(() => {
          setLoading(false);
        }, 500); // Duration matches the CSS transition duration
      }, simulatedDelay);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div className="App">
      {/* Main content is always rendered */}
      <NavBar />
      <Banner />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <ContactForm />
      <Footer />

      {/* Overlay loading screen */}
      {loading && (
        <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
          <div className="loader"></div>
        </div>
      )}
    </div>
    
    
  );
}

export default App;
