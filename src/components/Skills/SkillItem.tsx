import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Skill } from '../../data/skillsData' // Import the interface

interface SkillItemProps {
  skill: Skill
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  return (
    <div className='skill-item'>
      <FontAwesomeIcon icon={skill.icon} className='skill-icon' />
      <span className='skill-name'>{skill.name}</span>
    </div>
  )
}

export default SkillItem
