import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MegaVideoPlayer from '../components/MegaVideoPlayer'

// Project data with MEGA.nz links
// Replace the placeholder URLs with your actual MEGA file links
// Format: https://mega.nz/file/FILEID#KEY
const projects = [
  {
    id: 1,
    title: 'SALAR MOVIE TRAILOR',
    category: 'Movie Trailer',
    url: 'https://mega.nz/file/yME3AZAT#KrtcSXO_OxbSu2N8WT77HONiGzzdhkiiiemWQpy5qjA', // Replace with your MEGA link
    thumbnail: '',
  },
  {
    id: 2,
    title: 'MULTI CAM EDITING',
    category: 'Multi Cam',
    url: 'https://mega.nz/file/qB8HTLoK#96JB7ts9sIaHfi1H7lNj7wdjPnm6tx5hloY6r4DyQ9I', // Replace with your MEGA link
    thumbnail: '',
  },
  {
    id: 3,
    title: 'PRE WEDDING 1',
    category: 'Pre Wedding',
    url: 'https://mega.nz/file/fc1GGKob#JuN-wcmtm5SE0Mf8p-RIkOJr82Kz3uTgZp8JfMkhyDU', // Replace with your MEGA link
    thumbnail: '',
  },
  {
    id: 4,
    title: 'PRE WEDDING 2',
    category: 'Pre Wedding',
    url: 'https://mega.nz/file/2QljTThA#bouWmDkzAKrzfQChLxHyW1m_tmusS6QXjncOhilCRMY', // Replace with your MEGA link
    thumbnail: '',
  },
  {
    id: 5,
    title: '3D Reel',
    category: 'Reels / Shorts',
    url: 'https://mega.nz/file/nF1QkBZJ#_7AAsv9sd59XbOnw9ocxTaet1LaN1Ww07hoTE60QQB0', // Replace with your MEGA link
    thumbnail: '',
  },
  {
    id: 6,
    title: 'ANIMATION Reel',
    category: 'Reels / Shorts',
    url: 'https://mega.nz/file/Hc9T0agZ#cNgQIJwpWrN8g8qg1aPmD_TgghpSHVcGYRf5xuJUB-0', // Replace with your MEGA link
    thumbnail: '',
  },
  {
    id: 7,
    title: 'ASIA CUP Reel',
    category: 'Reels / Shorts',
    url: 'https://mega.nz/file/6N1yTbYK#jdDNTShVFC5XbX8bZI7kxyAD37Ni_r4FRuFej3xusLU', // Replace with your MEGA link
    thumbnail: '',
  },
  {
    id: 8,
    title: 'Final Reel',
    category: 'Reels / Shorts',
    url: 'https://mega.nz/file/vZ0RnSIA#6zax5nJ2-rrbYo9upzLr9RkDho811voeVgcsp8jycSA', // Replace with your MEGA link
    thumbnail: '',
  },
  {
    id: 9,
    title: 'Graphic Reel',
    category: 'Reels / Shorts',
    url: 'https://mega.nz/file/DMM12KQI#iHYHuG8Iu1_PE0jqP4qN0tcWQT4KSKkfWyWZWXTMlFI', // Replace with your MEGA link
    thumbnail: '',
  },
  {
    id: 10,
    title: 'REE 1',
    category: 'Reels / Shorts',
    url: 'https://mega.nz/file/SVUSyDAZ#aIb1nx1fXW_AW9v2kwylQE7Y9W_4BMpHmP5klnc9c2w', // Replace with your MEGA link
    thumbnail: '',
  },
  {
    id: 11,
    title: 'Reel',
    category: 'Reels / Shorts',
    url: 'https://mega.nz/file/aR8FECRB#tYQmUtSARsFgxOueXl3tHhz44NpHHT9KBBZAQw6qEwA', // Replace with your MEGA link
    thumbnail: '',
  },
  {
    id: 12,
    title: 'ROKO Reel',
    category: 'Reels / Shorts',
    url: 'https://mega.nz/file/HcdF2JCA#39LQJajtYFXQnS_XTTp_JLib0Bs3a6htj__q5wmEN9k', // Replace with your MEGA link
    thumbnail: '',
  },
]

const categories = ['All', 'Reels / Shorts', 'Pre Wedding', 'Movie Trailer', 'Multi Cam']

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedVideo, setSelectedVideo] = useState(null)

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  const handleVideoClick = (project) => {
    setSelectedVideo(project)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020205] py-16 text-white">
      <div className="absolute inset-0">
        <div className="absolute left-10 top-0 h-80 w-80 rounded-full bg-[#9700ff1a] blur-[160px]" />
        <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-[#57ff1c17] blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto border-b border-white/10 pb-6"
        >
          <div className="flex min-w-max gap-3 text-sm font-semibold sm:flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative whitespace-nowrap px-4 py-2 transition ${
                  activeFilter === category
                    ? 'text-white before:absolute before:-bottom-3 before:left-0 before:h-0.5 before:w-full before:bg-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.button
                type="button"
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-0 text-left transition hover:-translate-y-1"
                onClick={() => handleVideoClick(project)}
              >
                <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-[#3b82f633] via-transparent to-[#8b00ff33]">
                  <span className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 transition group-hover:opacity-80" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-black transition group-hover:scale-110">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="relative border-t border-white/5 px-6 py-5">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-white/60">{project.category}</p>
                </div>
              </motion.button>
            ))
          ) : (
            <div className="col-span-full rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-white/70">
              No projects found in this category.
            </div>
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
            onClick={closeVideo}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-4xl rounded-3xl border border-white/10 bg-[#111]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-2xl text-white transition hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation()
                  closeVideo()
                }}
              >
                ×
              </button>
              <div className="rounded-t-3xl p-4">
                <MegaVideoPlayer 
                  url={selectedVideo.url} 
                  title={selectedVideo.title}
                  className="w-full"
                />
              </div>
              <div className="px-6 py-4 text-center text-lg font-semibold">{selectedVideo.title}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Work

