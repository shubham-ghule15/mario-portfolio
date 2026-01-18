# Mario Portfolio 🍄 - React Edition

A blazing-fast, Mario-themed portfolio built with React + Vite.

![Mario Portfolio](https://img.shields.io/badge/React-19.1-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.x-purple?style=for-the-badge&logo=vite)
![Performance](https://img.shields.io/badge/Lighthouse-90+-green?style=for-the-badge)

## 🚀 Live Demo

**[View Live Portfolio →](https://mario-portfolio.vercel.app)**

## ⚡ Performance

| Metric | Before (Streamlit) | After (React) |
|--------|-------------------|---------------|
| Initial Load | 3-5s | <500ms |
| Navigation | 1-2s | Instant |
| Interactions | Laggy | Smooth 60fps |
| Bundle Size | ~50MB | ~200KB |

## 🎮 Features

- **🍄 Mario Theme** - Authentic retro gaming aesthetic with pixel fonts and 3D effects
- **⚡ Blazing Fast** - React + Vite for instant page loads
- **🎯 ML Demos** - Interactive K-Means, CLV Prediction, and Sentiment Analysis
- **📱 Responsive** - Works on all devices
- **🎨 Animations** - Smooth Framer Motion transitions

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite 7, Framer Motion
- **Styling**: CSS with hardware-accelerated animations
- **Routing**: React Router DOM
- **Deployment**: Vercel (free tier)

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/shubham-ghule15/mario-portfolio.git
cd mario-portfolio/frontend

# Install dependencies
npm install

# Start dev server
npm run dev
# Opens http://localhost:5173

# Build for production
npm run build
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   └── Navigation.jsx    # Horizontal nav bar
│   ├── pages/
│   │   ├── Home.jsx          # Hero, stats, skills
│   │   ├── Projects.jsx      # ML demos
│   │   ├── Experience.jsx    # Work history
│   │   ├── Resume.jsx        # Download resume
│   │   └── Contact.jsx       # Contact form
│   ├── styles/
│   │   └── mario.css         # Optimized Mario theme
│   ├── App.jsx               # Routes + lazy loading
│   └── main.jsx              # Entry point
├── public/
│   └── resume.pdf
├── index.html
├── vite.config.js
└── package.json
```

## 🌐 Deploy to Vercel (Free)

### Option 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/shubham-ghule15/mario-portfolio&project-name=mario-portfolio&root-directory=frontend)

### Option 2: CLI Deploy
```bash
cd frontend
npm run build
npx vercel --prod
```

## 📜 License

MIT License - See [LICENSE](LICENSE) for details.

---

Made with 🍄 by Shubham Ghule
