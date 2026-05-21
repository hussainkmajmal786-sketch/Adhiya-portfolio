# My Portfolio

A professional 3-page portfolio built with React + Vite.

## Pages
- `/` — Portfolio: Projects, Skills, About
- `/internship` — PM VIKAS Internship activities
- `/blog` — Professional blog with full post pages

## Quick Start

```bash
npm install
npm run dev
```

## Customise Before Deploying

1. **`src/components/Navbar.jsx`** — Change "Your Name" and initials "YN"
2. **`src/pages/Portfolio.jsx`** — Update projects, skills, about text, stats, email
3. **`src/pages/Internship.jsx`** — Update your timeline, role details, outcomes
4. **`src/data/posts.js`** — Edit or add your own blog posts
5. **`src/components/Footer.jsx`** — Update LinkedIn, GitHub, email links
6. **`public/resume.pdf`** — Drop your actual resume here

## Deploy to Vercel

### Option A — Vercel CLI (fastest)
```bash
npm i -g vercel
vercel
```
Follow the prompts. Your site will be live in ~60 seconds.

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Framework: **Vite** (auto-detected)
4. Build command: `npm run build`
5. Output dir: `dist`
6. Click **Deploy** ✅

## Tech Stack
- React 18
- React Router v6
- Vite 5
- Pure CSS (no UI library)
- Google Fonts: Cormorant Garamond, Syne, DM Mono
