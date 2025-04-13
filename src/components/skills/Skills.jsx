import React, { useState } from "react";
import './Skills.css';
import SkillCard from "./skillCard/SkillCard";
import SkillsInfoCard from "./skillsInfoCard/SkillsInfoCard";
import { SKILLS } from "../../utils/data";

const Skills = () => {

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectedSkill = (data) => {
        setSelectedSkill(data);
    }
return (
    <section id="skills" className="container">
        <div className="skills-container">
        <h3>Technical Proficency</h3>
        <small>NOTE: Skills are difficult to quantify, therefor I have listed them based on my confidence level at current time.</small>
        <br /><br /><br />

        <div className="skills-content">
            <div className="skills">
                {SKILLS.map((item) => (
                    <SkillCard
                        key={item.title}
                        iconUrl={item.icon}
                        title={item.title}
                        isActive={selectedSkill.title === item.title}
                        onClick={() => {
                            handleSelectedSkill(item);
                        }}
                    />
                ))}
            </div>
            <div className="skills-info">
                <SkillsInfoCard
                heading={selectedSkill.title}
                skills={selectedSkill.skills}
                />
            </div>
        </div>

    </div>
    </section> 
)

}

export default Skills;