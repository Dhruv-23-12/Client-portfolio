# MEGA.nz Video Setup Instructions

## Your MEGA Folder Link
You provided this folder link:
```
https://mega.nz/folder/LFkjmKzR#ZHlMPH-i8Rmb3tGJzutW9Q
```

## How to Get Individual File Links

To use videos in your portfolio, you need **individual file links** (not folder links). Here's how:

### Step 1: Access Your MEGA Folder
1. Open the folder link: `https://mega.nz/folder/LFkjmKzR#ZHlMPH-i8Rmb3tGJzutW9Q`
2. You'll see all your video files listed

### Step 2: Get Individual File Links
For each video file you want to display:

1. **Right-click** on the video file in MEGA
2. Select **"Get link"** or **"Share"**
3. Choose **"Get link with key"** (important!)
4. Copy the link - it will look like:
   ```
   https://mega.nz/file/ABC123XYZ#DEF456UVW789
   ```

### Step 3: Add Links to Your Portfolio

#### Option A: Edit `Work.jsx` directly
Open `client/src/pages/Work.jsx` and replace the placeholder URLs:

```javascript
const projects = [
  {
    id: 1,
    title: 'SALAR MOVIE TRAILOR',
    category: 'Movie Trailer',
    url: 'https://mega.nz/file/YOUR_FILE_ID#YOUR_KEY', // Paste your link here
    thumbnail: '',
  },
  // ... repeat for each video
]
```

#### Option B: Use `videos.json` (Recommended)
1. Open `client/public/videos.json`
2. Replace each `url` field with your actual MEGA file links
3. The component will automatically convert them to embed links

## Link Format Reference

### ✅ Correct Format (File Link)
```
https://mega.nz/file/FILEID#KEY
```
- Use this for individual videos
- Will be auto-converted to: `https://mega.nz/embed/FILEID#KEY`

### ✅ Correct Format (Folder Link)
```
https://mega.nz/folder/FOLDERID#KEY
```
- Use this to show folder contents (file list)
- Will be auto-converted to: `https://mega.nz/embed/FOLDERID#KEY`
- Note: Folder embeds show file list, not video player

### ❌ Wrong Format
- Links without the `#KEY` part won't work
- Make sure to use "Get link with key" option

## Quick Setup Checklist

- [ ] Open your MEGA folder: `https://mega.nz/folder/LFkjmKzR#ZHlMPH-i8Rmb3tGJzutW9Q`
- [ ] For each video, get the individual file link (with key)
- [ ] Update `client/src/pages/Work.jsx` or `client/public/videos.json` with your links
- [ ] Test locally: `npm run dev`
- [ ] Deploy to Vercel

## Example

If you have a video called "SALAR MOVIE TRAILOR.mp4":

1. Right-click → Get link with key
2. Copy: `https://mega.nz/file/ABC123XYZ#DEF456UVW789`
3. Paste in `Work.jsx`:
   ```javascript
   {
     id: 1,
     title: 'SALAR MOVIE TRAILOR',
     category: 'Movie Trailer',
     url: 'https://mega.nz/file/ABC123XYZ#DEF456UVW789',
     thumbnail: '',
   }
   ```

The component will automatically convert it to the embed format when displaying!

## Troubleshooting

**Video not playing?**
- Make sure you used "Get link with key" (not just "Get link")
- Check that the link includes `#KEY` at the end
- Verify the file is publicly accessible in MEGA

**Folder shows but videos don't play?**
- Folder links show file lists, not video players
- You need individual file links for video playback
- Use `MegaVideoPlayer` component for videos, `MegaFolderViewer` for folder browsing

## Components Available

1. **MegaVideoPlayer** - For individual video files
   ```jsx
   <MegaVideoPlayer url="https://mega.nz/file/FILEID#KEY" />
   ```

2. **MegaFolderViewer** - For folder contents (file list)
   ```jsx
   <MegaFolderViewer url="https://mega.nz/folder/FOLDERID#KEY" />
   ```

Both components automatically convert links to embed format!

