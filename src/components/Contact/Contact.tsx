import React from 'react'
import SocialLink from './SocialLink'
import ContactForm from './ContactForm'
import { socialLinks } from '../../data/socialLinksData'
import useAnimateOnScroll from '../../hooks/useAnimateOnScroll'

const Contact: React.FC = () => {
  // const [sectionRef, isVisible] = useAnimateOnScroll<HTMLDivElement>({ threshold: 0.1, triggerOnce: true })
  const [headingRef, isHeadingVisible] = useAnimateOnScroll<HTMLHeadingElement>({ threshold: 0.5, triggerOnce: true })
  const [infoRef, isInfoVisible] = useAnimateOnScroll<HTMLDivElement>({ threshold: 0.2, triggerOnce: true })
  const [formRef, isFormVisible] = useAnimateOnScroll<HTMLDivElement>({ threshold: 0.1, triggerOnce: true })

  return (
    <div id='contact'>
      <h2 ref={headingRef} className={`section-heading animate-fade-up ${isHeadingVisible ? 'is-visible' : ''}`}>
        Get In Touch
      </h2>
      <div className='contact-container'>
        <div ref={infoRef} className={`contact-info animate-fade-up ${isInfoVisible ? 'is-visible' : ''}`}>
          {/* ... existing intro text ... */}
          <div className='social-links'>
            {socialLinks.map((link) => (
              <SocialLink key={link.title} link={link} />
            ))}
          </div>
          <p className='contact-form-intro'>Or send me a message directly:</p>
        </div>

        <div ref={formRef} className={`contact-form-container animate-fade-up ${isFormVisible ? 'is-visible' : ''}`}>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
