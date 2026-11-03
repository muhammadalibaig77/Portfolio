# Muhammad Ali Baig — Personal Introduction Website

> **15-Year-Old Software Engineer & ACCP AI Diploma Candidate**  
> High school 9th grade student balancing academic foundations with advanced Artificial Intelligence & Software Architecture at Aptech.

---

## 🎨 Design System & Constraints Followed
- **Fonts Used Exclusively:**
  - `Inter` (Modern UI System Font)
  - `SF Pro Display` / `SF Pro Text` (Apple System Typeface)
- **Interactive Background:** `<DotField />` (React Bits JS-CSS) with `#5227FF` to `#FF9FFC` gradient and cursor physics.
- **Navigation:** `<StaggeredMenu />` (React Bits JS-CSS) with custom route anchors and social channels.
- **Section Headings:** `<TechText />` (React Bits JS-CSS) with dynamic dash, reveal, and letter tracking.
- **Section Animations:** `<AnimatedContent />` (React Bits JS-CSS) powered by GSAP & ScrollTrigger.
- **Interactive Cards:** `<BounceCards />` (React Bits JS-CSS) showcasing real-world software, AI, and architecture imagery.
- **Interactive Buttons:** `<SpecularButton />` (React Bits JS-CSS) featuring real-time WebGL specular light reflection.

---

## 🚀 How to Run Locally

### 1. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Structure
```
poyonoil/
├── public/
│   └── logo-ali.svg           # Custom vector monogram logo
├── src/
│   ├── components/            # React Bits components (JS-CSS variant)
│   │   ├── AnimatedContent.jsx
│   │   ├── BounceCards.jsx & .css
│   │   ├── DotField.jsx & .css
│   │   ├── SpecularButton.jsx & .css
│   │   ├── StaggeredMenu.jsx & .css
│   │   └── TechText.jsx & .css
│   ├── data/
│   │   └── portfolioData.json # Complete content schema for Ali Baig
│   ├── App.jsx                # Main page assembling all sections
│   ├── index.css              # Tailwind and typography rules
│   └── main.jsx               # React entry point
├── package.json
├── tailwind.config.js
└── vite.config.js
```
