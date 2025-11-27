import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { logoutAdmin, getSessionTimeRemaining } from '../utils/auth'

// Import the projects data structure (we'll manage it here)
const categories = ['Reels / Shorts', 'Pre Wedding', 'Movie Trailer', 'Multi Cam']

const Admin = () => {
  const navigate = useNavigate()
  const [projects, setProjects] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [sessionTime, setSessionTime] = useState(0)
  const [saveStatus, setSaveStatus] = useState('')

  // Load projects from localStorage or use default
  useEffect(() => {
    const savedProjects = localStorage.getItem('admin_projects')
    if (savedProjects) {
      try {
        setProjects(JSON.parse(savedProjects))
      } catch (error) {
        console.error('Error loading projects:', error)
        loadDefaultProjects()
      }
    } else {
      loadDefaultProjects()
    }
  }, [])

  // Update session time every minute
  useEffect(() => {
    const updateSessionTime = () => {
      setSessionTime(getSessionTimeRemaining())
    }
    updateSessionTime()
    const interval = setInterval(updateSessionTime, 60000) // Update every minute
    return () => clearInterval(interval)
  }, [])

  const loadDefaultProjects = () => {
    // Try to import projects from Work.jsx if available
    // Otherwise use default structure
    const defaultProjects = [
      { id: 1, title: 'SALAR MOVIE TRAILOR', category: 'Movie Trailer', url: 'https://mega.nz/file/yME3AZAT#KrtcSXO_OxbSu2N8WT77HONiGzzdhkiiiemWQpy5qjA', thumbnail: '' },
      { id: 2, title: 'MULTI CAM EDITING', category: 'Multi Cam', url: 'https://mega.nz/file/qB8HTLoK#96JB7ts9sIaHfi1H7lNj7wdjPnm6tx5hloY6r4DyQ9I', thumbnail: '' },
      { id: 3, title: 'PRE WEDDING 1', category: 'Pre Wedding', url: 'https://mega.nz/file/fc1GGKob#JuN-wcmtm5SE0Mf8p-RIkOJr82Kz3uTgZp8JfMkhyDU', thumbnail: '' },
      { id: 4, title: 'PRE WEDDING 2', category: 'Pre Wedding', url: 'https://mega.nz/file/2QljTThA#bouWmDkzAKrzfQChLxHyW1m_tmusS6QXjncOhilCRMY', thumbnail: '' },
      { id: 5, title: '3D Reel', category: 'Reels / Shorts', url: 'https://mega.nz/file/nF1QkBZJ#_7AAsv9sd59XbOnw9ocxTaet1LaN1Ww07hoTE60QQB0', thumbnail: '' },
      { id: 6, title: 'ANIMATION Reel', category: 'Reels / Shorts', url: 'https://mega.nz/file/Hc9T0agZ#cNgQIJwpWrN8g8qg1aPmD_TgghpSHVcGYRf5xuJUB-0', thumbnail: '' },
      { id: 7, title: 'ASIA CUP Reel', category: 'Reels / Shorts', url: 'https://mega.nz/file/6N1yTbYK#jdDNTShVFC5XbX8bZI7kxyAD37Ni_r4FRuFej3xusLU', thumbnail: '' },
      { id: 8, title: 'Final Reel', category: 'Reels / Shorts', url: 'https://mega.nz/file/vZ0RnSIA#6zax5nJ2-rrbYo9upzLr9RkDho811voeVgcsp8jycSA', thumbnail: '' },
      { id: 9, title: 'Graphic Reel', category: 'Reels / Shorts', url: 'https://mega.nz/file/DMM12KQI#iHYHuG8Iu1_PE0jqP4qN0tcWQT4KSKkfWyWZWXTMlFI', thumbnail: '' },
      { id: 10, title: 'REE 1', category: 'Reels / Shorts', url: 'https://mega.nz/file/SVUSyDAZ#aIb1nx1fXW_AW9v2kwylQE7Y9W_4BMpHmP5klnc9c2w', thumbnail: '' },
      { id: 11, title: 'Reel', category: 'Reels / Shorts', url: 'https://mega.nz/file/aR8FECRB#tYQmUtSARsFgxOueXl3tHhz44NpHHT9KBBZAQw6qEwA', thumbnail: '' },
      { id: 12, title: 'ROKO Reel', category: 'Reels / Shorts', url: 'https://mega.nz/file/HcdF2JCA#39LQJajtYFXQnS_XTTp_JLib0Bs3a6htj__q5wmEN9k', thumbnail: '' },
    ]
    setProjects(defaultProjects)
  }

  const handleEdit = (id) => {
    setEditingId(id)
  }

  const handleSave = (id, field, value) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      )
    )
    setEditingId(null)
    setSaveStatus('Changes saved locally')
    setTimeout(() => setSaveStatus(''), 3000)
  }

  const handleSaveAll = () => {
    // Save to localStorage
    localStorage.setItem('admin_projects', JSON.stringify(projects))
    
    // Also update Work.jsx file structure (for development)
    // In production, you'd send this to a backend API
    setSaveStatus('All changes saved! Update Work.jsx manually or use API.')
    setTimeout(() => setSaveStatus(''), 5000)
  }

  const handleLogout = () => {
    logoutAdmin()
    navigate('/')
  }

  const handleAddProject = () => {
    const newId = Math.max(...projects.map((p) => p.id), 0) + 1
    setProjects([
      ...projects,
      { id: newId, title: 'New Project', category: 'Reels / Shorts', url: '', thumbnail: '' },
    ])
  }

  const handleDeleteProject = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects((prev) => prev.filter((project) => project.id !== id))
      setSaveStatus('Project deleted')
      setTimeout(() => setSaveStatus(''), 3000)
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020205] py-16 text-white">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute left-10 top-0 h-80 w-80 rounded-full bg-[#9700ff1a] blur-[160px]" />
        <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-[#57ff1c17] blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
            <p className="mt-2 text-sm text-white/60">
              Manage your portfolio videos and MEGA links
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-white/60">
              Session: {Math.floor(sessionTime / 60)}h {sessionTime % 60}m
            </div>
            <button
              onClick={handleSaveAll}
              className="rounded-xl bg-gradient-to-r from-[#4c0b79] via-[#7a2dff] to-[#12001d] px-6 py-2 text-sm font-semibold text-white transition hover:shadow-[0_20px_60px_rgba(122,45,255,0.45)]"
            >
              Save All
            </button>
            <button
              onClick={handleLogout}
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Logout
            </button>
          </div>
        </motion.div>

        {/* Save Status */}
        {saveStatus && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 rounded-lg bg-green-500/10 border border-green-500/20 p-4 text-sm text-green-400"
          >
            {saveStatus}
          </motion.div>
        )}

        {/* Add Project Button */}
        <div className="mb-6">
          <button
            onClick={handleAddProject}
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            + Add New Project
          </button>
        </div>

        {/* Projects Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="overflow-x-auto rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">MEGA URL</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <motion.tr
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-white/5 hover:bg-white/5"
                >
                  <td className="px-6 py-4 text-sm text-white/80">{project.id}</td>
                  <td className="px-6 py-4">
                    {editingId === project.id ? (
                      <input
                        type="text"
                        defaultValue={project.title}
                        onBlur={(e) => handleSave(project.id, 'title', e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleSave(project.id, 'title', e.target.value)
                          }
                        }}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-white/30 focus:outline-none"
                        autoFocus
                      />
                    ) : (
                      <span
                        className="cursor-pointer text-sm text-white hover:text-white/80"
                        onClick={() => handleEdit(project.id)}
                      >
                        {project.title}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {editingId === project.id ? (
                      <select
                        defaultValue={project.category}
                        onChange={(e) => handleSave(project.id, 'category', e.target.value)}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-white/30 focus:outline-none"
                      >
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <span
                        className="cursor-pointer text-sm text-white/80 hover:text-white"
                        onClick={() => handleEdit(project.id)}
                      >
                        {project.category}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {editingId === project.id ? (
                      <input
                        type="text"
                        defaultValue={project.url}
                        onBlur={(e) => handleSave(project.id, 'url', e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleSave(project.id, 'url', e.target.value)
                          }
                        }}
                        placeholder="https://mega.nz/file/FILEID#KEY"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
                      />
                    ) : (
                      <span
                        className="cursor-pointer truncate text-xs text-white/60 hover:text-white/80"
                        onClick={() => handleEdit(project.id)}
                        title={project.url || 'Click to add MEGA link'}
                      >
                        {project.url || 'Click to add link'}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleEdit(project.id)}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/10"
                      >
                        {editingId === project.id ? 'Save' : 'Edit'}
                      </button>
                      <button
                        onClick={() => handleDeleteProject(project.id)}
                        className="rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-400 transition hover:bg-red-500/20"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6"
        >
          <h3 className="mb-3 text-lg font-semibold text-blue-400">💡 Instructions</h3>
          <ul className="space-y-2 text-sm text-blue-300/80">
            <li>• Click on any field to edit it</li>
            <li>• Press Enter or click outside to save changes</li>
            <li>• MEGA links should be in format: <code className="text-xs">https://mega.nz/file/FILEID#KEY</code></li>
            <li>• Changes are saved to localStorage. Update Work.jsx manually or integrate with backend API.</li>
            <li>• Session expires after 24 hours. Logout and login again if needed.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Admin

