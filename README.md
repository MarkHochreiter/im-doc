# Nintendo Game Manual Website

A retro-styled website that recreates the look and feel of 1980s Nintendo game manuals.

## Features

- Authentic 80s Nintendo color palette and typography
- Interactive page navigation with Previous/Next buttons and page dots
- 8 detailed pages: Cover, Table of Contents, Story, Controls, Gameplay, Characters, Items, and World Maps
- Responsive design for desktop and mobile
- Retro visual effects including paper texture and pixel art elements

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open http://localhost:5173 in your browser

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project is configured for easy deployment on Netlify, Vercel, or any static hosting service.

### Netlify Deployment
1. Push this repository to GitHub
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

## Project Structure

- `src/App.jsx` - Main React component with all pages
- `src/App.css` - All styling including retro Nintendo theme
- `src/assets/` - Image assets used in the manual
- `public/` - Static assets

## Customization

To modify the content:
1. Edit the page components in `src/App.jsx`
2. Modify styling in `src/App.css`
3. Replace images in `src/assets/`
4. Update the page data in the `pages` array

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Lucide React Icons
- Custom CSS for retro styling

