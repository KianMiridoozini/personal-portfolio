// ProjectCard.jsx
import React from 'react';
import { Col } from 'react-bootstrap';
import './ProjectCard.css';

export const ProjectCard = ({ title, description, imgUrl, link, category, openModal }) => {
  // Determine container class based on category
  let containerClass = '';
  if (category === 'web') {
    containerClass = 'proj-imgbx';
  } else if (category === 'photography') {
    containerClass = 'photo-imgbx';
  } else if (category === 'design') {
    containerClass = 'design-imgbx';
  }

  // For photo/design projects, only display the image and trigger modal on click
  if (category !== 'web') {
    return (
      <Col sm={8} md={6}>
        <div className={containerClass} onClick={openModal}>
          <img src={imgUrl} alt={title || 'project image'} loading="lazy" decoding="async" />
        </div>
      </Col>
    );
  }

  // Web projects with additional info
  return (
    <Col sm={8} md={6}>
      <div className={containerClass}>
        <img src={imgUrl} alt={title} loading="lazy" decoding="async" />
        <div className="proj-txtx">
          <div className="proj-txtx-content">
          <h3>{title}</h3>
          <span>{description}</span>
          </div>
          <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </Col>
  );
};
