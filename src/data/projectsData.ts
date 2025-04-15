export interface ProjectLink {
  url: string
  type: 'live' | 'code'
}

export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  imageUrl: string // Use imported images or URLs
  links: ProjectLink[]
}

// Replace with your actual project data and image paths/URLs
export const projects: Project[] = [
  {
    id: 1,
    title: 'Quantum Flux Dashboard',
    description:
      'A data visualization dashboard using simulated quantum computing outputs. Features real-time data streams and customizable widgets.',
    tags: ['React', 'D3.js', 'Node.js', 'WebSocket'],
    imageUrl: 'https://placehold.co/400x225/021022/00ffff?text=Project+Thumbnail+1',
    links: [
      { url: '#', type: 'live' },
      { url: '#', type: 'code' },
    ],
  },
  {
    id: 2,
    title: 'Neural Net Navigator',
    description:
      'An interactive tool exploring different neural network architectures. Built with Python backend and a clean, responsive frontend.',
    tags: ['Python', 'Flask', 'JavaScript', 'CSS Grid'],
    imageUrl: 'https://placehold.co/400x225/021022/00ffff?text=Project+Thumbnail+2',
    links: [
      { url: '#', type: 'live' },
      { url: '#', type: 'code' },
    ],
  },
  {
    id: 3,
    title: 'AR Blueprint Visualizer',
    description:
      'Mobile application using Augmented Reality to overlay architectural blueprints onto physical spaces via the device camera.',
    tags: ['Unity', 'C#', 'AR Foundation', 'iOS/Android'],
    imageUrl: 'https://placehold.co/400x225/021022/00ffff?text=Project+Thumbnail+3',
    links: [
      { url: '#', type: 'code' }, // Example with only code link
    ],
  },
  // Add more projects
]
