import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export interface SocialLinkData {
  url: string
  icon: IconDefinition
  title: string
}

export const socialLinks: SocialLinkData[] = [
  { url: '#', icon: faLinkedin, title: 'LinkedIn Profile' },
  { url: '#', icon: faGithub, title: 'GitHub Profile' },
  { url: '#', icon: faTwitter, title: 'Twitter / X Profile' },
  { url: '#', icon: faGlobe, title: 'Your Website/Portfolio' },
  // Add more links
]

// Note: Replace '#' with actual URLs for your social media profiles.
