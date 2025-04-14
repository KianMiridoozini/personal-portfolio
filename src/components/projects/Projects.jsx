import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import './Projects.css';
import { PROJECTS } from '../../utils/data';
import { ProjectCard } from './projectCard/ProjectCard';
import LightboxModal from '../modal/LightBoxModal';

export const Projects = () => {
  // States for the lightbox modal (from previous implementation)
  const [modalShow, setModalShow] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCategoryImages, setCurrentCategoryImages] = useState([]);
  
  // States for "Load More" functionality:
  const [photoCount, setPhotoCount] = useState(6);
  const [designCount, setDesignCount] = useState(6);

  // Filter projects based on category:
  const webProjects = PROJECTS.filter(project => project.category === 'web');
  const photographyProjects = PROJECTS.filter(project => project.category === 'photography');
  const designProjects = PROJECTS.filter(project => project.category === 'design');

  // Open modal handler (for photo/design projects)
  const openModal = (category, index) => {
    const filteredProjects =
      category === 'photography'
        ? photographyProjects
        : designProjects;
    setCurrentCategoryImages(filteredProjects.map(project => project.imgUrl));
    setCurrentImageIndex(index);
    setModalShow(true);
  };

  // Handlers for modal navigation:
  const handleNext = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % currentCategoryImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + currentCategoryImages.length) % currentCategoryImages.length);
  };

  return (
    <section id="projects" className="container">
      <div id="projects-container" className="project-container">
        <Container>
          <Row>
            <Col>
              <h3>Projects</h3>
              <p>
                Here are a few projects I've worked on throughout my education and personal journey. For more web projects, please check out my <a style={{ color: 'white', textDecoration: 'underline', fontWeight: 'semibold' }} href="https://github.com/kianmiridoozini">GitHub</a>.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="web">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                  <Nav.Item>
                    <Nav.Link eventKey="web">Web</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="photography">Photography</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="design">Design</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  {/* Web Projects */}
                  <Tab.Pane eventKey="web">
                    <Row>
                      {webProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} category="web" />
                      ))}
                    </Row>
                  </Tab.Pane>
                  {/* Photography Projects */}
                  <Tab.Pane eventKey="photography">
                    <Row>
                      {photographyProjects.slice(0, photoCount).map((project, index) => (
                        <ProjectCard 
                          key={index} 
                          {...project} 
                          category="photography" 
                          openModal={() => openModal('photography', index)}
                        />
                      ))}
                    </Row>
                    {photoCount < photographyProjects.length && (
                      <div className="load-more-container" style={{ textAlign: 'center', marginTop: '20px' }}>
                        <button onClick={() => setPhotoCount(photoCount + 6)} className="load-more-button">
                          Load More
                        </button>
                      </div>
                    )}
                  </Tab.Pane>
                  {/* Design Projects */}
                  <Tab.Pane eventKey="design">
                    <Row>
                      {designProjects.slice(0, designCount).map((project, index) => (
                        <ProjectCard 
                          key={index} 
                          {...project} 
                          category="design" 
                          openModal={() => openModal('design', index)}
                        />
                      ))}
                    </Row>
                    {designCount < designProjects.length && (
                      <div className="load-more-container" style={{ textAlign: 'center', marginTop: '20px' }}>
                        <button onClick={() => setDesignCount(designCount + 6)} className="load-more-button">
                          Load More
                        </button>
                      </div>
                    )}
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </div>
      <LightboxModal 
        show={modalShow}
        images={currentCategoryImages}
        currentIndex={currentImageIndex}
        onClose={() => setModalShow(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
