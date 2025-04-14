import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialLinkData } from '../../data/socialLinksData' // Import the interface

interface SocialLinkProps {
  link: SocialLinkData
}

const SocialLink: React.FC<SocialLinkProps> = ({ link }) => {
  return (
    <a href={link.url} target='_blank' rel='noopener noreferrer' title={link.title} className='social-link'>
      <FontAwesomeIcon icon={link.icon} />
    </a>
  )
}

export default SocialLink
