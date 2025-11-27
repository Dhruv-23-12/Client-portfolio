const parseAllowedOrigins = () => {
  const origins = new Set()

  if (process.env.ALLOWED_ORIGINS) {
    process.env.ALLOWED_ORIGINS.split(',').forEach((origin) => {
      const trimmed = origin.trim()
      if (trimmed) origins.add(trimmed)
    })
  }

  if (process.env.CLIENT_URL) {
    origins.add(process.env.CLIENT_URL.trim())
  }

  // Local development defaults
  origins.add('http://localhost:5173')
  origins.add('http://localhost:3000')

  return origins.size === 0 ? ['*'] : Array.from(origins)
}

export const allowedOrigins = parseAllowedOrigins()
export const allowAllOrigins = allowedOrigins.includes('*')

export const corsOptions = {
  origin(origin, callback) {
    if (!origin || allowAllOrigins || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error(`Origin ${origin} not allowed by CORS`))
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 204,
  maxAge: 86400,
}

export const handleCors = (req, res) => {
  const origin = req.headers.origin
  const isAllowed = !origin || allowAllOrigins || allowedOrigins.includes(origin)

  if (!isAllowed) {
    res.status(403).json({ success: false, message: 'Origin not allowed by CORS policy.' })
    return true
  }

  const allowOriginHeader = allowAllOrigins ? '*' : origin || allowedOrigins[0]

  if (allowOriginHeader) {
    res.setHeader('Access-Control-Allow-Origin', allowOriginHeader)
  }
  if (!allowAllOrigins) {
    res.setHeader('Vary', 'Origin')
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Access-Control-Max-Age', '86400')

  if (req.method === 'OPTIONS') {
    res.status(204).end()
    return true
  }

  return false
}

