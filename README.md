# Muhammad Ali Baig — Personal Introduction Website

> **15-Year-Old 9th Grade Student & ACCP AI Beginner**  
> High school student learning web development, coding fundamentals, and Artificial Intelligence at Aptech.

---

## 🚀 How to Host on Vercel (Ready!)

This project is pre-configured for **1-click zero-config deployment on Vercel**:

### Option 1: Via GitHub (Recommended)
1. Push this folder to your GitHub repository at `https://github.com/muhammadalibaig77`.
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New..."** → **"Project"**.
4. Select your portfolio repository and click **"Import"**.
5. Vercel will automatically detect:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **"Deploy"** — your website will be live with a free `.vercel.app` URL and automatic HTTPS!

### Option 2: Via Vercel CLI
If you have Vercel CLI installed:
```bash
npx vercel
```
Follow the quick prompts in your terminal to deploy directly!

---

## 🛠️ Local Development

### 1. Start Local Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Test Production Build
```bash
npm run build
npm run preview
```

---

## 📂 Project Architecture
```
poyonoil/
├── .gitignore                 # Excludes node_modules, dist, etc.
├── vercel.json                # Vercel SPA routing & build configuration
├── public/
│   └── react.svg              # React tab favicon & header icon
├── src/
│   ├── components/            # React Bits components (JS-CSS variant)
│   │   ├── AnimatedContent.jsx
│   │   ├── BounceCards.jsx & .css
│   │   ├── DotField.jsx & .css
│   │   ├── SpecularButton.jsx & .css
│   │   ├── StaggeredMenu.jsx & .css
│   │   └── TechText.jsx & .css
│   ├── data/
│   │   └── portfolioData.json # Accurate beginner-level content & links
│   ├── App.jsx                # Main page assembling all sections
│   ├── index.css              # Tailwind and typography rules
│   └── main.jsx               # React entry point
├── package.json
├── tailwind.config.js
└── vite.config.js
```
