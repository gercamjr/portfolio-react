import React from 'react'
import SocialLink from './SocialLink'
import ContactForm from './ContactForm'
import { socialLinks } from '../../data/socialLinksData' // Import the data

const Contact: React.FC = () => {
  return (
    <div id='contact' className='section-container'>
      <h2 className='section-heading'>Get In Touch</h2>
      <div className='contact-container'>
        <div className='contact-info'>
          <p className='contact-intro'>
            Have a project idea, a question, or just want to connect? Feel free to reach out! You can find me on these
            platforms:
          </p>
          <div className='social-links'>
            {socialLinks.map((link) => (
              <SocialLink key={link.title} link={link} />
            ))}
          </div>
          <p className='contact-form-intro'>Or send me a message directly:</p>
        </div>

        <div className='contact-form-container'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
