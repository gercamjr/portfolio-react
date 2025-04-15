import Profile from './components/Profile/Profile'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import './global.css' // Import global styles

// Replace with your actual details
const profileData = {
  name: 'Marvin',
  title: 'Software Engineer',
  description:
    'Driven software engineer specializing in building scalable web applications and exploring cutting-edge technologies. Passionate about clean code, innovative solutions, and pushing the boundaries of digital experiences. Always eager to learn and collaborate on challenging projects.',
  imageUrl: 'https://gercamjr.github.io/portfolio-react/profile-image.png', // Replace with your image path or URL
}

function App() {
  return (
    <div className='App'>
      {/* Optional wrapper div */}
      <Profile
        name={profileData.name}
        title={profileData.title}
        description={profileData.description}
        imageUrl={profileData.imageUrl}
      />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
