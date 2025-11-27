import { useState, useEffect } from 'react'
import { convertMegaLinkToEmbed, isMegaFolderLink } from '../utils/megaLinkConverter'

/**
 * MegaVideoPlayer Component
 * 
 * A reusable React component that renders MEGA.nz videos using iframe embed.
 * Supports fullscreen and is responsive/mobile-friendly.
 * 
 * @param {string} url - MEGA file link (will be auto-converted to embed link)
 * @param {string} title - Optional title for the video
 * @param {string} className - Optional additional CSS classes
 * @param {boolean} autoPlay - Whether to autoplay the video (default: false)
 */
const MegaVideoPlayer = ({ url, title = '', className = '', autoPlay = false }) => {
  const [embedUrl, setEmbedUrl] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) {
      setError('No URL provided')
      setIsLoading(false)
      return
    }

    // Check if it's a folder link (folders can't be played as videos)
    if (isMegaFolderLink(url) && url.includes('/folder/')) {
      setError('Folder links cannot be played as videos. Please use individual file links. See MEGA_SETUP_INSTRUCTIONS.md for help.')
      setIsLoading(false)
      return
    }

    // Convert MEGA file link to embed link
    const convertedUrl = convertMegaLinkToEmbed(url)
    
    if (!convertedUrl) {
      setError('Invalid MEGA link format')
      setIsLoading(false)
      return
    }

    setEmbedUrl(convertedUrl)
    setIsLoading(false)
  }, [url])

  if (error) {
    return (
      <div className={`flex items-center justify-center rounded-lg bg-red-500/10 p-8 text-red-400 ${className}`}>
        <div className="text-center">
          <p className="text-sm font-medium">Error loading video</p>
          <p className="mt-1 text-xs text-red-500/70">{error}</p>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center rounded-lg bg-white/5 p-8 ${className}`}>
        <div className="text-center">
          <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white"></div>
          <p className="text-sm text-white/60">Loading video...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative w-full ${className}`}>
      {/* MEGA iframe embed */}
      <div className="relative w-full overflow-hidden rounded-lg bg-black" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={embedUrl}
          title={title || 'MEGA Video Player'}
          className="absolute left-0 top-0 h-full w-full border-0"
          allowFullScreen
          allow="autoplay; fullscreen; encrypted-media"
          loading="lazy"
          style={{
            minHeight: '400px',
          }}
        />
      </div>

      {/* Optional title display */}
      {title && (
        <div className="mt-3 text-center text-sm font-medium text-white/80">
          {title}
        </div>
      )}
    </div>
  )
}

export default MegaVideoPlayer

