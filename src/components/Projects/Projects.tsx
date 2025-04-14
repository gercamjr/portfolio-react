import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/projectsData' // Import the data

const Projects: React.FC = () => {
  return (
    <div id='projects' className='section-container'>
      <h2 className='section-heading'>Projects</h2>
      <div className='projects-grid'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
