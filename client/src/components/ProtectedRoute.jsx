import { Navigate, useLocation } from 'react-router-dom'
import { isAdminAuthenticated } from '../utils/auth'

/**
 * ProtectedRoute Component
 * 
 * Wraps routes that require admin authentication.
 * Redirects to login if not authenticated.
 */
const ProtectedRoute = ({ children }) => {
  const location = useLocation()
  const isAuthenticated = isAdminAuthenticated()

  if (!isAuthenticated) {
    // Redirect to login with return URL
    return <Navigate to="/admin-varshil-07/login" state={{ from: location }} replace />
  }

  return children
}

export default ProtectedRoute

