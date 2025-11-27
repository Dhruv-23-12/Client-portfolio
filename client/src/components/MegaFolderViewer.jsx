import { convertMegaLinkToEmbed, isMegaFolderLink } from '../utils/megaLinkConverter'

/**
 * MegaFolderViewer Component
 * 
 * Displays a MEGA folder using an iframe embed.
 * Note: This shows the folder contents (file list), not individual videos.
 * For video playback, use individual file links with MegaVideoPlayer.
 * 
 * @param {string} url - MEGA folder link (will be auto-converted to embed link)
 * @param {string} title - Optional title for the folder
 * @param {string} className - Optional additional CSS classes
 */
const MegaFolderViewer = ({ url, title = '', className = '' }) => {
  if (!url) {
    return (
      <div className={`flex items-center justify-center rounded-lg bg-white/5 p-8 ${className}`}>
        <p className="text-sm text-white/60">No folder link provided</p>
      </div>
    )
  }

  // Check if it's a folder link
  if (!isMegaFolderLink(url)) {
    return (
      <div className={`flex items-center justify-center rounded-lg bg-yellow-500/10 p-8 text-yellow-400 ${className}`}>
        <div className="text-center">
          <p className="text-sm font-medium">Not a folder link</p>
          <p className="mt-1 text-xs text-yellow-500/70">
            This component is for MEGA folder links. Use MegaVideoPlayer for individual files.
          </p>
        </div>
      </div>
    )
  }

  const embedUrl = convertMegaLinkToEmbed(url)

  return (
    <div className={`relative w-full ${className}`}>
      {/* MEGA folder iframe embed */}
      <div className="relative w-full overflow-hidden rounded-lg bg-black" style={{ paddingBottom: '600px', minHeight: '600px' }}>
        <iframe
          src={embedUrl}
          title={title || 'MEGA Folder Viewer'}
          className="absolute left-0 top-0 h-full w-full border-0"
          allowFullScreen
          loading="lazy"
        />
      </div>

      {/* Optional title display */}
      {title && (
        <div className="mt-3 text-center text-sm font-medium text-white/80">
          {title}
        </div>
      )}

      {/* Info message */}
      <div className="mt-3 rounded-lg bg-blue-500/10 border border-blue-500/20 p-3">
        <p className="text-xs text-blue-400">
          💡 <strong>Tip:</strong> To embed individual videos, get the file link for each video from this folder and use it with MegaVideoPlayer.
        </p>
      </div>
    </div>
  )
}

export default MegaFolderViewer

