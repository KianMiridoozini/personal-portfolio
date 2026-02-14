import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../timeline/Timeline.css';
import { EXPERIENCE } from './../../utils/data';

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="container">
      <h2>Experience</h2>

      <VerticalTimeline>
        {EXPERIENCE.map((role, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            date={role.duration}
            icon={<img src={role.logo} alt={role.company} />}
          >
            <h3 className="vertical-timeline-element-title">{role.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {role.link ? (
                <a href={role.link} target="_blank" rel="noopener noreferrer">
                  {role.company}
                </a>
              ) : (
                role.company
              )}
            </h4>
            <p>{role.location}</p>
            <p>{role.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default ExperienceTimeline;
