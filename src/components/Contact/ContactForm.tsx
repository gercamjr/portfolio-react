import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

// Define the structure of your form data
interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

// Define the possible status states
type FormStatus = 'idle' | 'loading' | 'success' | 'error'
interface StatusMessage {
  type: FormStatus
  text: string | null
}

const ContactForm: React.FC = () => {
  const formEndpoint = 'YOUR_FORM_ENDPOINT' // <-- IMPORTANT: Replace this!

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState<StatusMessage>({ type: 'idle', text: null })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevent default browser submission
    setStatus({ type: 'loading', text: 'Sending...' })

    if (!formEndpoint || formEndpoint === 'YOUR_FORM_ENDPOINT') {
      console.error('Form endpoint is not configured!')
      setStatus({ type: 'error', text: 'Form submission is not configured.' })
      return
    }

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json', // Important for services like Formspree
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus({ type: 'success', text: 'Message sent successfully! Thank you.' })
        setFormData({ name: '', email: '', subject: '', message: '' }) // Clear form
      } else {
        // Try to get error message from response if possible
        const errorData = await response.json().catch(() => ({})) // Catch if response isn't JSON
        console.error('Form submission error:', response.status, errorData)
        setStatus({ type: 'error', text: `Submission failed: ${errorData?.error || 'Please try again.'}` })
      }
    } catch (error) {
      console.error('Network or other error:', error)
      setStatus({ type: 'error', text: 'An error occurred. Please try again later.' })
    }
  }

  return (
    <form id='contact-form' onSubmit={handleSubmit} action={formEndpoint} method='POST'>
      <div className='form-group'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required />
      </div>
      <div className='form-group'>
        <label htmlFor='subject'>Subject (Optional)</label>
        <input type='text' id='subject' name='subject' value={formData.subject} onChange={handleChange} />
      </div>
      <div className='form-group'>
        <label htmlFor='message'>Message</label>
        <textarea
          id='message'
          name='message'
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type='submit' className='submit-button' disabled={status.type === 'loading'}>
        {status.type === 'loading' ? 'Sending...' : 'Send Message'}
        {status.type !== 'loading' && <FontAwesomeIcon icon={faPaperPlane} />}
      </button>
      {status.text && (
        <div id='form-status' className={`form-status ${status.type}`}>
          {' '}
          {/* Add success/error class */}
          {status.text}
        </div>
      )}
    </form>
  )
}

export default ContactForm
