# Shree Babaji - Spiritual Website

A beautiful spiritual website built with **Next.js 14**, **Tailwind CSS**, and **React 18**.

## Prerequisites

- **Node.js** (version 18.17 or later) — [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

## Getting Started

### 1. Install Dependencies

Open a terminal in this project folder and run:

```bash
npm install
```

This will create the `node_modules` folder with all required packages.

### 2. Run Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
babaji/
├── public/              # Static assets (images, icons, etc.)
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles + Tailwind
│   │   ├── layout.js    # Root layout
│   │   └── page.js      # Home page
│   └── components/
│       ├── Navbar.js
│       ├── Hero.js
│       ├── About.js
│       ├── Teachings.js
│       ├── VisitAshram.js
│       ├── Programs.js
│       ├── Donations.js
│       ├── Testimonials.js
│       ├── Gallery.js
│       ├── Footer.js
│       ├── OmDivider.js
│       └── useInView.js
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── jsconfig.json
├── package.json
└── .gitignore
```

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3**
- **Google Fonts** (Cormorant Garamond, Lora, Nunito Sans)
