import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/projectsData'
import useAnimateOnScroll from '../../hooks/useAnimateOnScroll'

const Projects: React.FC = () => {
  const [sectionRef, isVisible] = useAnimateOnScroll<HTMLDivElement>({ threshold: 0.05, triggerOnce: false }) // Trigger sooner
  const [headingRef, isHeadingVisible] = useAnimateOnScroll<HTMLHeadingElement>({ threshold: 0.5, triggerOnce: false })

  return (
    <div id='projects' ref={sectionRef}>
      <h2 ref={headingRef} className={`section-heading animate-fade-up ${isHeadingVisible ? 'is-visible' : ''}`}>
        Projects
      </h2>
      <div className='projects-grid'>
        {projects.map((project) => (
          // Apply isVisible from parent, CSS handles stagger/delay
          <div key={project.id} className={`project-card ${isVisible ? 'is-visible' : ''}`}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}
// NOTE: Removed className from ProjectCard itself and wrapped it

export default Projects
