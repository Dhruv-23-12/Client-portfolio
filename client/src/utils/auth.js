/**
 * Simple authentication utility for admin access
 * Uses localStorage to persist session
 */

const ADMIN_PASSWORD_KEY = 'admin_auth_token'
const ADMIN_SESSION_KEY = 'admin_session'
const SESSION_DURATION = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

/**
 * Set admin password (should be set via environment variable in production)
 * Default password can be changed here or via env
 */
const getAdminPassword = () => {
  // In production, use: import.meta.env.VITE_ADMIN_PASSWORD
  // For now, using a default that should be changed
  return import.meta.env.VITE_ADMIN_PASSWORD || 'admin-varshil-07-2024'
}

/**
 * Authenticate admin with password
 * @param {string} password - The password to check
 * @returns {boolean} - True if password is correct
 */
export const authenticateAdmin = (password) => {
  const correctPassword = getAdminPassword()
  
  if (password === correctPassword) {
    // Store session with expiration
    const sessionData = {
      authenticated: true,
      timestamp: Date.now(),
      expiresAt: Date.now() + SESSION_DURATION,
    }
    localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(sessionData))
    return true
  }
  
  return false
}

/**
 * Check if admin is currently authenticated
 * @returns {boolean} - True if authenticated and session is valid
 */
export const isAdminAuthenticated = () => {
  try {
    const sessionData = localStorage.getItem(ADMIN_SESSION_KEY)
    
    if (!sessionData) {
      return false
    }
    
    const session = JSON.parse(sessionData)
    
    // Check if session has expired
    if (Date.now() > session.expiresAt) {
      logoutAdmin()
      return false
    }
    
    return session.authenticated === true
  } catch (error) {
    console.error('Error checking admin authentication:', error)
    return false
  }
}

/**
 * Logout admin (clear session)
 */
export const logoutAdmin = () => {
  localStorage.removeItem(ADMIN_SESSION_KEY)
}

/**
 * Get remaining session time in minutes
 * @returns {number} - Minutes until session expires
 */
export const getSessionTimeRemaining = () => {
  try {
    const sessionData = localStorage.getItem(ADMIN_SESSION_KEY)
    if (!sessionData) return 0
    
    const session = JSON.parse(sessionData)
    const remaining = session.expiresAt - Date.now()
    return Math.max(0, Math.floor(remaining / (60 * 1000))) // Convert to minutes
  } catch (error) {
    return 0
  }
}

