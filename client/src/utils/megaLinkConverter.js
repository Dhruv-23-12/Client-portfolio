/**
 * Utility function to convert MEGA file or folder links to embed links
 * 
 * Input (file):  https://mega.nz/file/FILEID#KEY
 * Output (file): https://mega.nz/embed/FILEID#KEY
 * 
 * Input (folder):  https://mega.nz/folder/FOLDERID#KEY
 * Output (folder): https://mega.nz/embed/FOLDERID#KEY
 * 
 * @param {string} megaLink - The MEGA file or folder link (with or without key)
 * @returns {string} - The converted MEGA embed link
 */
export const convertMegaLinkToEmbed = (megaLink) => {
  if (!megaLink || typeof megaLink !== 'string') {
    return ''
  }

  // Remove any whitespace
  const trimmedLink = megaLink.trim()

  // Check if it's already an embed link
  if (trimmedLink.includes('/embed/')) {
    return trimmedLink
  }

  // Check if it's a valid MEGA file link
  if (trimmedLink.includes('mega.nz/file/')) {
    // Convert /file/ to /embed/
    return trimmedLink.replace('/file/', '/embed/')
  }

  // Check if it's a valid MEGA folder link
  if (trimmedLink.includes('mega.nz/folder/')) {
    // Convert /folder/ to /embed/
    return trimmedLink.replace('/folder/', '/embed/')
  }

  console.warn('Invalid MEGA link format:', trimmedLink)
  return trimmedLink
}

/**
 * Validates if a string is a valid MEGA link (file or folder)
 * 
 * @param {string} link - The link to validate
 * @returns {boolean} - True if valid MEGA link
 */
export const isValidMegaLink = (link) => {
  if (!link || typeof link !== 'string') {
    return false
  }

  const trimmedLink = link.trim()
  return (
    trimmedLink.includes('mega.nz/file/') ||
    trimmedLink.includes('mega.nz/folder/') ||
    trimmedLink.includes('mega.nz/embed/')
  )
}

/**
 * Checks if a MEGA link is a folder link
 * 
 * @param {string} link - The MEGA link
 * @returns {boolean} - True if it's a folder link
 */
export const isMegaFolderLink = (link) => {
  if (!link || typeof link !== 'string') {
    return false
  }

  const trimmedLink = link.trim()
  return trimmedLink.includes('mega.nz/folder/') || trimmedLink.includes('mega.nz/embed/')
}

/**
 * Extracts the file/folder ID and key from a MEGA link
 * 
 * @param {string} megaLink - The MEGA link
 * @returns {object} - Object with id, key, and type properties
 */
export const extractMegaLinkParts = (megaLink) => {
  if (!isValidMegaLink(megaLink)) {
    return { id: null, key: null, type: null }
  }

  const trimmedLink = megaLink.trim()
  
  // Match file links
  const fileMatch = trimmedLink.match(/mega\.nz\/(?:file|embed)\/([^#]+)(?:#(.+))?/)
  if (fileMatch) {
    return {
      id: fileMatch[1],
      key: fileMatch[2] || null,
      type: 'file',
    }
  }

  // Match folder links
  const folderMatch = trimmedLink.match(/mega\.nz\/(?:folder|embed)\/([^#]+)(?:#(.+))?/)
  if (folderMatch) {
    return {
      id: folderMatch[1],
      key: folderMatch[2] || null,
      type: 'folder',
    }
  }

  return { id: null, key: null, type: null }
}

