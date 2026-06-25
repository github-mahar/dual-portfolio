# Mahar GM — Frontend & Shopify Developer Portfolio

A sleek, responsive, and high-performance developer portfolio website built to showcase freelance projects, client websites, Shopify OS 2.0 themes, and custom full-stack web solutions.

## 🚀 Tech Stack

*   **Framework:** React 19
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS 4 (with CSS variables design system)
*   **Build Tool & Dev Server:** Vite 8
*   **Linter:** Oxlint (for ultra-fast linting)

## ✨ Features

*   **Responsive Dual-Portfolio Showcase:** An interactive grid showcasing projects categorized by Shopify storefronts and web platform developments.
*   **Validated Contact Form:** Fully validated form with a custom budget selector, integrated with Formspree for instant email submissions.
*   **Curated Aesthetics:** Sophisticated color palette (Warm Paper background, Ink text, Clay accent, and Sage details) with smooth micro-interactions.
*   **Optimized Performance:** Clean asset usage, minimal dependencies, and lightning-fast loading speeds.

## 🛠️ Local Development

### 1. Clone the repository
```bash
git clone https://github.com/github-mahar/dual-portfolio.git
cd dual-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

### 5. Run Linter
```bash
npm run lint
```

## 📂 Project Structure

*   `src/components/` — Modular React UI components (`Nav`, `Hero`, `Work`, `ContactForm`, `Stack`, etc.).
*   `src/data/` — Static configuration files (`links.ts` and `projects.ts`) for easily updating contact links and portfolio projects without touching UI code.
*   `src/index.css` & `src/App.css` — Global CSS variables and styling overrides.
*   `public/` — Static assets including logos and project previews.
