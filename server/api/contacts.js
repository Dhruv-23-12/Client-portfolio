import dotenv from 'dotenv'
import Contact from '../models/Contact.js'
import { connectDB } from '../utils/db.js'
import { handleCors } from '../utils/cors.js'

dotenv.config()

export default async function handler(req, res) {
  if (handleCors(req, res)) {
    return
  }

  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` })
  }

  try {
    await connectDB()
    const contacts = await Contact.find().sort({ createdAt: -1 })
    return res.status(200).json({ success: true, data: contacts })
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return res.status(500).json({ success: false, message: 'Failed to fetch contacts' })
  }
}

