# Anushka Joshi — Portfolio

A cinematic city skyline portfolio built with Next.js, TypeScript, Tailwind CSS, and React.

## Features
- 🌆 Interactive canvas city skyline with animated sky transitions (golden hour → midnight)
- 🚗 Cartoon-style animated cars with day/night headlights
- ✨ Stars that appear at dusk and midnight
- 🖱️ Custom cursor with hover states
- 📄 Smooth page overlays for About, Projects, Research & Contact
- 🎨 Mood system — move cursor left/right to shift the time of day

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**
- HTML Canvas API (no external animation libs)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Custom cursor, animations, scrollbar
│   ├── layout.tsx       # Root layout + fonts
│   └── page.tsx         # Main page
├── components/
│   ├── CityCanvas.tsx   # Canvas stage + hero text
│   ├── CustomCursor.tsx # Custom cursor dots
│   ├── BuildingLabel.tsx# Hover tooltips above buildings
│   ├── PageOverlay.tsx  # Slide-in page system
│   └── pages/
│       ├── AboutPage.tsx
│       ├── ProjectsPage.tsx
│       ├── ResearchPage.tsx
│       └── ContactPage.tsx
├── hooks/
│   ├── useCanvas.ts     # All canvas drawing & interaction logic
│   └── useCursor.ts     # Custom cursor tracking
└── lib/
    ├── types.ts         # TypeScript interfaces
    ├── data.ts          # Content data (projects, skills, moods)
    └── canvas.ts        # Canvas utility functions
```

## Customization

- Edit **`src/lib/data.ts`** to update projects, skills, and building config
- Edit **`src/components/pages/`** to update page content
- Update contact links in **`ContactPage.tsx`**
- Adjust color palette in **`tailwind.config.ts`** and **`globals.css`**
