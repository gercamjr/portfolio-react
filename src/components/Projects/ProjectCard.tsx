import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Project } from '../../data/projectsData' // Import the interface

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const liveLink = project.links.find((link) => link.type === 'live')
  const codeLink = project.links.find((link) => link.type === 'code')

  return (
    <>
      <img src={project.imageUrl} alt={`${project.title} Screenshot`} className='project-image' />
      <div className='project-content'>
        <h3 className='project-title'>{project.title}</h3>
        <p className='project-description'>{project.description}</p>
        <div className='project-tags'>
          {project.tags.map((tag) => (
            <span key={tag} className='tag'>
              {tag}
            </span>
          ))}
        </div>
        <div className='project-links'>
          {liveLink && (
            <a href={liveLink.url} target='_blank' rel='noopener noreferrer' className='project-link'>
              <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
            </a>
          )}
          {codeLink && (
            <a href={codeLink.url} target='_blank' rel='noopener noreferrer' className='project-link'>
              <FontAwesomeIcon icon={faGithub} /> Code
            </a>
          )}
        </div>
      </div>
    </>
  )
}

export default ProjectCard
