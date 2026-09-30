# 🏆 Current Wrestling Champions Tracker

A responsive, real-time web application built with **React** and **Vite** that tracks and displays current champions across the world's premier professional wrestling promotions: **WWE**, **NXT**, **AEW**, **TNA**, and **NJPW**.

The application dynamically pulls live titleholder information directly from the **Wikipedia API**, ensuring that rosters, reign numbers, dates won, match notes, and days held automatically update in real time whenever championships change hands.

🔗 **Live Demo:** [https://Saksit-Jittasopee.github.io/current-champions](https://Saksit-Jittasopee.github.io/current-champions)

---

## 📖 Table of Contents

- [What This Project Does](#-what-this-project-does)
- [What It Is Made Of (Tech Stack)](#-what-it-is-made-of-tech-stack)
- [Routes Guide](#-routes-guide)
- [Key Features](#-key-features)
- [Project Architecture & File Structure](#-project-architecture--file-structure)
- [Getting Started & Local Development](#-getting-started--local-development)
- [Deployment](#-deployment)
- [Author & Credits](#-author--credits)

---

## 🎯 What This Project Does

Keeping track of championship reigns across multiple promotions can be challenging due to weekly television shows, pay-per-views, and unexpected title changes.

This project solves that by:
1. **Automating Champion Tracking**: Rather than relying on manually updated static JSON or HTML, it connects directly to Wikipedia's MediaWiki API.
2. **Dynamic Live Calculations**: Automatically calculates the exact **"Days Held"** for each titleholder continuously relative to today's date.
3. **Detecting Title Changes in Real Time**: Monitors Wikipedia revision IDs (`revid`) with background polling (every 60 seconds) and tab-focus synchronization. When a new champion is crowned, the UI detects the update and alerts the user.
4. **Providing a Polished User Interface**: Presents champions in uniform, responsive card grids styled with promotion-authentic brand accents, wrestler portraits, Wikipedia biography links, and dark/light mode support.

---

## 🛠️ What It Is Made Of (Tech Stack)

| Technology | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Modern component-based UI framework utilizing functional components and custom hooks |
| **[Vite 7](https://vite.dev/)** | Next-generation frontend build tool and ultra-fast hot module replacement (HMR) development server |
| **[React Router 7](https://reactrouter.com/)** | Client-side routing using `HashRouter` for zero-configuration compatibility on static hosts like GitHub Pages |
| **[Wikipedia MediaWiki API](https://www.mediawiki.org/wiki/API:Main_page)** | Public CORS-enabled REST API (`action=parse&prop=text|revid&format=json&origin=*`) queried live without server-side middleware |
| **[React Icons 5](https://react-icons.github.io/react-icons/)** | Iconography library delivering icons from Ionicons (`io5`), FontAwesome (`fa`), and Simple Icons (`si`) |
| **CSS3 & CSS Custom Properties** | Modern styling with CSS Grid, Flexbox, glassmorphism, responsive breakpoints, and theme variables |
| **[Google Fonts](https://fonts.google.com/)** | Custom display typography featuring *Bebas Neue*, *Barlow Condensed*, and *Barlow* |
| **[gh-pages](https://github.com/tschaub/gh-pages)** | Deployment automation script for publishing the production bundle to GitHub Pages |

---

## 🗺️ Routes Guide

The application uses client-side hash routing (`/#/route`) to seamlessly support static hosting environments.

### 1. `#/` — Home (`Home.jsx`)
- **Purpose**: The landing page and introduction to the tracker.
- **Features**:
  - Hero banner with animated background grid and championship tracker eyebrow badge.
  - "About This Page" section explaining the project's purpose and live Wikipedia sync.
  - Interactive "Tech Stack" grid with direct documentation links for Vite, Wikipedia API, React Router, and React Icons.
  - Quick guidance on switching themes and navigating promotions.

### 2. `#/wwe` — WWE Main Roster (`WWEInfo.jsx`)
- **Source Article**: [`List of current champions in WWE`](https://en.wikipedia.org/wiki/List_of_current_champions_in_WWE) (filtered to main roster divisions).
- **Titles Showcased**:
  - Undisputed WWE Championship
  - WWE World Heavyweight Championship
  - WWE Women's Championship
  - WWE Women's World Championship
  - WWE Intercontinental Championship
  - WWE Women's Intercontinental Championship
  - WWE United States Championship
  - WWE Women's United States Championship
  - WWE World Tag Team Championship
  - WWE Tag Team Championship
  - WWE Women's Tag Team Championship
- **Card Branding**:
  - **Raw** (`card-raw`): Crimson Red accent border (`#e11d48`) with ruby badge.
  - **SmackDown** (`card-smackdown`): Electric Sapphire Blue accent border (`#2563eb`) with blue badge.
  - **Open / Cross-Brand** (`card-open`): Royal Amethyst Purple accent border (`#9333ea`) for Women's Tag Team titles.

### 3. `#/nxt` — WWE NXT Brand (`NXTInfo.jsx`)
- **Source Article**: [`List of current champions in WWE`](https://en.wikipedia.org/wiki/List_of_current_champions_in_WWE) (filtered to the NXT developmental section).
- **Titles Showcased**:
  - NXT Championship
  - NXT Women's Championship
  - NXT North American Championship
  - NXT Women's North American Championship
  - NXT Heritage Cup
  - NXT Tag Team Championship
  - WWE Speed & Women's Speed Championships (when defended on NXT)
- **Card Branding**:
  - **Men's Division** (`card-nxtmen`): NXT Signature Amber Gold accent (`#f59e0b`).
  - **Women's Division** (`card-nxtwomen`): Ice Indigo / Lavender accent (`#6366f1`).

### 4. `#/aew` — All Elite Wrestling (`AEWInfo.jsx`)
- **Source Article**: [`List of current champions in All Elite Wrestling`](https://en.wikipedia.org/wiki/List_of_current_champions_in_All_Elite_Wrestling).
- **Titles Showcased**:
  - AEW World Championship
  - AEW Women's World Championship
  - AEW International Championship
  - AEW Continental Championship
  - AEW TNT Championship
  - AEW TBS Championship
  - AEW National Championship
  - AEW World Tag Team Championship
  - AEW World Trios Championship
  - AEW Women's World Tag Team Championship
- **Card Branding**:
  - **Men's Division** (`card-aewmen`): AEW Warm Ochre & Gold accent (`#d97706`).
  - **Women's Division** (`card-aewwomen`): Vivid Magenta / Rose accent (`#ec4899`).

### 5. `#/tna` — Total Nonstop Action Wrestling (`TNAInfo.jsx`)
- **Source Article**: [`List of current champions in TNA Wrestling`](https://en.wikipedia.org/wiki/List_of_current_champions_in_TNA_Wrestling).
- **Titles Showcased**:
  - TNA World Championship
  - TNA International Championship
  - TNA X Division Championship
  - TNA World Tag Team Championship
  - TNA Knockouts World Championship
  - TNA Knockouts Television Championship
  - TNA Knockouts World Tag Team Championship
- **Card Branding**:
  - **Men's Division** (`card-tnamen`): TNA Impact Crimson Red accent (`#dc2626`).
  - **Knockouts Division** (`card-tnawomen`): Knockouts Hot Pink / Rose accent (`#f43f5e`).

### 6. `#/njpw` — New Japan Pro-Wrestling (`NJPWInfo.jsx`)
- **Source Article**: [`List of current champions in New Japan Pro-Wrestling`](https://en.wikipedia.org/wiki/List_of_current_champions_in_New_Japan_Pro-Wrestling).
- **Titles Showcased**:
  - IWGP Heavyweight Championship
  - IWGP Global Heavyweight Championship
  - IWGP Junior Heavyweight Championship
  - NEVER Openweight Championship
  - NJPW World Television Championship
  - IWGP Tag Team Championship
  - IWGP Junior Heavyweight Tag Team Championship
  - NEVER Openweight 6-Man Tag Team Championship
  - Strong Openweight & Strong Women's Championships
  - Strong Openweight Tag Team Championship
  - NJPW TAMASHII Tag Team Championship
  - IWGP Women's Championship
- **Card Branding**:
  - **Heavyweight / NEVER** (`card-njpwmen`): King of Sports Crimson accent (`#e11d48`).
  - **Junior Heavyweight** (`card-njpwjrmen`): Brilliant Goldenrod accent (`#eab308`).
  - **Strong / Openweight** (`card-njpwstrong`): Pacific Ocean Cyan accent (`#0284c7`).
  - **Women's Division** (`card-njpwwomen`): Royal Violet accent (`#a855f7`).

### 7. `*` — Wildcard Redirect
- Any unrecognized path automatically redirects to `#/` via `<Navigate to="/" replace />`.

---

## ⚡ Key Features

### 🔄 Real-Time Live Sync & Auto-Updates
- **Live Wikipedia API Integration**: Connects to MediaWiki API endpoints with `smaxage=0&maxage=0&_t=${timestamp}` and `cache: 'no-cache'`, ensuring the latest revisions are retrieved without edge-caching delays.
- **Stale-While-Revalidate**: Loads cached or baseline data instantly on initial render, while simultaneously executing a background fetch to Wikipedia so the screen is never blank.
- **Auto-Polling (60-second Interval)**: Queries Wikipedia every 60 seconds while the page is open.
- **Tab Focus Sync**: Detects when the user returns to the tab (`visibilitychange` and `focus` events) and automatically checks for title changes.
- **Title Change Detection**: Compares revision IDs (`revid`) and highlights changes with a visual *"Title Change Updated"* badge.

### ⏱️ Dynamic "Days Held" Counter
- Automatically parses victory dates and recalculates the exact count of days a title has been held relative to today's date:
  $$\text{Days Held} = \left\lfloor \frac{\text{Date.now()} - \text{Date.parse}(\text{dateWon})}{1000 \times 60 \times 60 \times 24} \right\rfloor$$
- Highlighted on every card in a golden stat chip.

### 🛡️ Offline Resilience & Image Fallbacks
- **Baseline Fallback Dataset** (`fallbackChampions.js`): If the network is offline or Wikipedia is unreachable, the application seamlessly falls back to a complete, pre-bundled dataset.
- **Vector Championship Belt Fallback** (`default-belt.svg`): When Wikipedia lacks a wrestler photo or an image URL is unavailable, an SVG belt placeholder ensures no broken image icons appear.

### 🌗 Dark & Light Theme Switching
- Toggle between a deep slate dark theme (`#0a0e17`) and a clean pure-white light theme (`#ffffff`).
- Both `<html>` and `<body>` classes sync automatically, ensuring seamless background transitions without edge bleeding.
- User theme preference is saved in `localStorage`.

---

## 📂 Project Architecture & File Structure

```text
current-champions/
├── public/                     # Static public assets (favicons, manifest)
├── src/
│   ├── assets/                 # Promotion icons (.ico) and fallback graphics
│   │   ├── AEW/                # AEW icons and reference photos
│   │   ├── NJPW/               # NJPW icons and reference photos
│   │   ├── NXT/                # NXT icons and reference photos
│   │   ├── TNA/                # TNA icons and reference photos
│   │   ├── WWE/                # WWE icons and reference photos
│   │   └── default-belt.svg    # Custom championship belt placeholder
│   ├── components/             # Reusable UI and page components
│   │   ├── AEWInfo.jsx / .css  # AEW page component
│   │   ├── ChampionCard.jsx    # Card component with image handling & stat chips
│   │   ├── ChampionshipShared.css # Unified CSS Grid and card box system
│   │   ├── Footer.jsx / .css   # Global footer with social links
│   │   ├── Header.jsx / .css   # Glassmorphic header with active route pills
│   │   ├── Home.jsx / .css     # Landing page with hero & tech stack
│   │   ├── LiveStatusBar.jsx / .css # Live sync bar & manual refresh trigger
│   │   ├── NJPWInfo.jsx / .css # NJPW page component
│   │   ├── NXTInfo.jsx / .css  # NXT page component
│   │   ├── TNAInfo.jsx / .css  # TNA page component
│   │   └── WWEInfo.jsx / .css  # WWE page component
│   ├── data/
│   │   └── fallbackChampions.js # Up-to-date fallback baseline dataset
│   ├── hooks/
│   │   └── useChampions.js     # Custom hook for polling, caching & sync
│   ├── services/
│   │   └── wikipediaService.js # Wikipedia API client & HTML table parser
│   ├── App.jsx / App.css       # Root application component & theme wrapper
│   ├── index.css               # Global CSS variables, fonts & resets
│   └── main.jsx                # Application entry point
├── index.html                  # HTML template
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite configuration
└── README.md                   # Project documentation
```

---

## 💻 Getting Started & Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` (bundled with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Saksit-Jittasopee/current-champions.git
   ```
2. Navigate into the project folder:
   ```bash
   cd current-champions
   ```
3. Install project dependencies:
   ```bash
   npm install
   ```

### Running Locally
Start the Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port indicated in your terminal).

### Linting
Check the codebase for ESLint compliance:
```bash
npm run lint
```

### Production Build
Build and optimize the application for production:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## 🚀 Deployment

The project is configured for automated deployment to **GitHub Pages** using `gh-pages`:

```bash
npm run deploy
```
This script runs `npm run build` (via `predeploy`), bundles the output into `dist/`, and publishes it to the `gh-pages` branch.

---

## 👤 Author & Credits

- **Developer:** [Saksit Jittasopee](https://github.com/Saksit-Jittasopee)
- **Socials:**
  - [GitHub](https://github.com/Saksit-Jittasopee)
  - [LinkedIn](https://www.linkedin.com/in/saksit-jittasopee-743981382/)
  - [Instagram](https://www.instagram.com/saksitjittasopee/)
  - [Facebook](https://www.facebook.com/saksit.jittasopee.1)
- **Data Attribution:** Championship information, statistics, and biography excerpts are provided dynamically via [Wikipedia](https://www.wikipedia.org/) under the [Creative Commons Attribution-ShareAlike License](https://en.wikipedia.org/wiki/Wikipedia:Text_of_the_Creative_Commons_Attribution-ShareAlike_4.0_International_License).
