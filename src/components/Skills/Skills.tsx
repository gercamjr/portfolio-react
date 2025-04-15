import React from 'react'
import SkillItem from './SkillItem'
import { skills } from '../../data/skillsData'
import useAnimateOnScroll from '../../hooks/useAnimateOnScroll'

const Skills: React.FC = () => {
  const [sectionRef, isVisible] = useAnimateOnScroll<HTMLDivElement>({ threshold: 0.1, triggerOnce: false })

  const [headingRef, isHeadingVisible] = useAnimateOnScroll<HTMLHeadingElement>({ threshold: 0.5, triggerOnce: false })

  return (
    <div id='skills' ref={sectionRef}>
      <h2 ref={headingRef} className={`section-heading animate-fade-up ${isHeadingVisible ? 'is-visible' : ''}`}>
        Technical Skills
      </h2>
      <div className='skills-grid-container'>
        <div className='skills-grid'>
          {skills.map((skill) => (
            // Apply isVisible from parent section observer, CSS handles delay
            <div key={skill.name} className={`skill-item ${isVisible ? 'is-visible' : ''}`}>
              <SkillItem skill={skill} /> {/* SkillItem itself doesn't need the hook */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
// NOTE: We removed the className from SkillItem itself and wrapped it
// Apply the hook / classes as needed based on desired animation granularity

export default Skills
