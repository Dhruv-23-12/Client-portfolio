import dotenv from 'dotenv'
import Contact from '../models/Contact.js'
import { connectDB } from '../utils/db.js'

dotenv.config()

const validatePayload = (body) => {
  const { name, email, subject, message } = body || {}

  if (!name || !email || !subject || !message) {
    return 'All fields (name, email, subject, message) are required.'
  }

  return null
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` })
  }

  const validationError = validatePayload(req.body)

  if (validationError) {
    return res.status(400).json({ success: false, message: validationError })
  }

  try {
    await connectDB()
    const contact = await Contact.create(req.body)

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully! I will get back to you within 24 hours.',
      data: contact,
    })
  } catch (error) {
    console.error('Contact submission error:', error)
    return res
      .status(500)
      .json({ success: false, message: 'Failed to send message. Please try again later.' })
  }
}

