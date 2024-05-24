import React, { useState, useEffect } from 'react';
import './Skill.css';

function Skill() {
    const [displayedSkills, setDisplayedSkills] = useState([]);

    useEffect(() => {
        const skills = ["Javascript", "React-JS", "Git", "Github"];
        const delay = 1000; // Delay between each skill item in milliseconds

        const displaySkillsSequentially = async () => {
            for (let i = 0; i < skills.length; i++) {
                await new Promise(resolve => setTimeout(resolve, delay)); // Wait for the delay
                setDisplayedSkills(prevSkills => [...prevSkills, skills[i]]); // Add the next skill to displayedSkills
            }
        };

        displaySkillsSequentially();
    }, []);

    return (
        <div className='skill-container'>
            <h1>My Skills</h1>
            <ul className="skill-list">
                {displayedSkills.map((skill, index) => (
                    <li key={index} className="skill-item">{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default Skill;
