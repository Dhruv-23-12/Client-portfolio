import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Contact from './models/Contact.js'
import { connectDB } from './utils/db.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB Connection
connectDB()
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error)
  })

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' })
})

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      })
    }

    // Create new contact
    const contact = new Contact({
      name,
      email,
      subject,
      message,
    })

    await contact.save()

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! I will get back to you within 24 hours.',
      data: contact,
    })
  } catch (error) {
    console.error('Error saving contact:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    })
  }
})

// Get all contacts (optional - for admin use)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json({ success: true, data: contacts })
  } catch (error) {
    console.error('Error fetching contacts:', error)
    res.status(500).json({ success: false, message: 'Failed to fetch contacts' })
  }
})

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

export default app
