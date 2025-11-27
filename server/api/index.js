import { handleCors } from '../utils/cors.js'

export default function handler(req, res) {
  if (handleCors(req, res)) {
    return
  }

  return res.status(200).json({
    status: 'OK',
    message: 'Varshil Portfolio backend is running. Use /api/health or /api/contact for endpoints.',
  })
}

