import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faPython,
  faJsSquare,
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faDocker,
  faGitAlt,
  faAws,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faTerminal } from '@fortawesome/free-solid-svg-icons'

export interface Skill {
  name: string
  icon: IconDefinition
}

export const skills: Skill[] = [
  { name: 'Python', icon: faPython },
  { name: 'JavaScript', icon: faJsSquare },
  { name: 'React', icon: faReact },
  { name: 'Node.js', icon: faNodeJs },
  { name: 'HTML5', icon: faHtml5 },
  { name: 'CSS3', icon: faCss3Alt },
  { name: 'SQL', icon: faDatabase }, // Using generic DB icon
  { name: 'MongoDB', icon: faDatabase }, // Using generic DB icon
  { name: 'Docker', icon: faDocker },
  { name: 'Git', icon: faGitAlt },
  { name: 'AWS', icon: faAws },
  { name: 'Linux/Bash', icon: faTerminal },
  // Add more skills as needed
]
