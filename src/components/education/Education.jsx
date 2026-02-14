// EducationTimeline.jsx
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../timeline/Timeline.css';
import { EDUCATION } from './../../utils/data';

const EducationTimeline = () => {
  return (
    <section id="education" className="container">
        <h2>Education</h2>

    <VerticalTimeline>
      {EDUCATION.map((edu, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--education"
          date={edu.duration}
          icon={<img src={edu.logo} alt={edu.institute} />}
        >
          <h3 className="vertical-timeline-element-title">{edu.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{edu.institute}</h4>
          <p>{edu.location}</p>
          {edu.Description.map((desc, i) => (
            <p key={i}>{desc}</p>
          ))}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
    </section>
  );
};

export default EducationTimeline;
