import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { authenticateAdmin } from '../utils/auth'

const AdminLogin = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // Get the return URL (where user was trying to go)
  const from = location.state?.from?.pathname || '/admin-varshil-07'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Small delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 300))

    if (authenticateAdmin(password)) {
      // Redirect to admin page
      navigate(from, { replace: true })
    } else {
      setError('Incorrect password. Please try again.')
      setPassword('')
    }

    setIsLoading(false)
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020205] px-4 py-16 text-white">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute left-10 top-0 h-80 w-80 rounded-full bg-[#9700ff1a] blur-[160px]" />
        <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-[#57ff1c17] blur-[160px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 shadow-2xl"
      >
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white">Admin Access</h1>
          <p className="mt-2 text-sm text-white/60">Enter password to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-white/80">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/20"
              required
              autoFocus
              disabled={isLoading}
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400"
            >
              {error}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={isLoading || !password}
            className="w-full rounded-xl bg-gradient-to-r from-[#4c0b79] via-[#7a2dff] to-[#12001d] px-6 py-3 font-semibold text-white transition hover:shadow-[0_20px_60px_rgba(122,45,255,0.45)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white"></span>
                Verifying...
              </span>
            ) : (
              'Access Admin Panel'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-white/40">
            Protected admin area - Unauthorized access prohibited
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default AdminLogin

