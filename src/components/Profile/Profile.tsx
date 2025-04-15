import React from 'react'
import useAnimateOnScroll from '../../hooks/useAnimateOnScroll'
// If using CSS Modules: import styles from './Profile.module.css';
// If using global CSS, no style import needed here if imported in App/main

// Consider adding props if name, title, description, imageURL are dynamic
interface ProfileProps {
  name: string
  title: string
  description: string
  imageUrl: string // Or import if local
}

const Profile: React.FC<ProfileProps> = ({ name, title, description, imageUrl }) => {
  // Create refs for elements to animate
  //const [sectionRef, isSectionVisible] = useAnimateOnScroll<HTMLDivElement>({ threshold: 0.1 })
  const [imageRef, isImageVisible] = useAnimateOnScroll<HTMLDivElement>({ threshold: 0.4, triggerOnce: false })
  const [textRef, isTextVisible] = useAnimateOnScroll<HTMLDivElement>({ threshold: 0.2, triggerOnce: false })

  return (
    // Use the ID for global CSS targeting and animations
    <div id='profile' className='section-container'>
      {/* Add a general class if needed */}
      <div className='profile-container'>
        {/* Keep original classes for styling */}
        <div ref={imageRef} className={`profile-image-frame animate-scale-in ${isImageVisible ? 'is-visible' : ''}`}>
          <div className='profile-image-glow'></div>
          <img src={imageUrl} alt={`Profile Picture of ${name}`} className='profile-image' />
        </div>
        <div ref={textRef} className={`profile-text animate-fade-up ${isTextVisible ? 'is-visible' : ''}`}>
          <h1 className='profile-name'>{name}</h1>
          <h2 className='profile-title'>{title}</h2>
          <p className='profile-description'>{description}</p>
          <div className='tech-divider'></div>
        </div>
      </div>
    </div>
  )
}

export default Profile
// Note: Ensure to replace the imageUrl prop with an actual image path or URL.
