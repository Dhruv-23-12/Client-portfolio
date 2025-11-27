# Varshil Tailor - Portfolio Website

A modern, dark-themed portfolio website for a professional video editor.

## Features

- **Home Page**: Hero section with gradient background, software icons, and lightning graphics
- **About Page**: Introduction, strengths, skills snapshot, and tools
- **Work Page**: Filterable project gallery with video playback
- **Contact Page**: Contact form and contact information

## Setup

1. Install dependencies:
```bash
npm install
```

2. Make sure the PROJECT folder is in the `public` directory with all video files

3. Add your assets (Hero Image, CapCut icon, Photoroom icon) to `src/assets/` folder

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Project Structure

```
client/
├── public/
│   └── PROJECT/          # Video files organized by category
├── src/
│   ├── assets/           # Images and static assets
│   ├── components/       # Reusable components
│   │   └── Navbar.jsx
│   └── pages/            # Page components
│       ├── Home.jsx
│       ├── About.jsx
│       ├── Work.jsx
│       └── Contact.jsx
```

## Assets Required

Place these files in `src/assets/`:
- `Hero Image.png` - Main hero image
- `capcut.png` - CapCut logo
- `Photoroom.png` - Photoroom logo
- `premiere.png` - Adobe Premiere Pro logo (optional)

## Technologies

- React
- React Router DOM
- Framer Motion
- Vite
- CSS3

