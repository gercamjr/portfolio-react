import React from 'react'
import SkillItem from './SkillItem'
import { skills } from '../../data/skillsData' // Import the data

const Skills: React.FC = () => {
  return (
    <div id='skills' className='section-container'>
      <h2 className='section-heading'>Technical Skills</h2>
      <div className='skills-grid'>
        {skills.map((skill) => (
          // Use skill name as key assuming names are unique
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default Skills
