# Disruptive Digital — Marketing Agency Website Clone

**Student Name:** Umer Kamran  
**Student ID:** 23018020063  
**Course:** HCI (Human-Computer Interaction)  
**Live Deployment:** https://disruptive-clone.vercel.app/  
**GitHub Repository:** https://github.com/Umer4534/disruptive-clone  

---

## Project Overview

A responsive clone of [Disruptive Advertising](https://disruptiveadvertising.com/), built as a modern marketing agency website. The project was developed primarily by me (Umer Kamran) with AI used as a coding assistant to speed up repetitive tasks like boilerplate generation and code scaffolding. All design decisions, structural planning, content organization, and final refinements were done manually.

---

## Tools Used

| Tool | Purpose | Who Used It |
|------|---------|-------------|
| **VS Code** | Primary code editor for writing, editing, and managing all project files | Main (Umer Kamran) |
| **Next.js 16** | React framework for server-side rendering and static site generation | Main (Umer Kamran) |
| **Tailwind CSS v4** | Utility-first CSS framework for styling all components | Main (Umer Kamran) |
| **Lucide React** | Icon library for consistent, scalable vector icons | Main (Umer Kamran) |
| **OpenCode (AI CLI)** | AI assistant used to generate initial boilerplate and speed up repetitive code blocks | Assistant only |
| **Vercel** | Deployment platform for hosting the live site | Main (Umer Kamran) |
| **GitHub** | Version control, repository hosting, and collaboration | Main (Umer Kamran) |

---

## How It Was Made — Step-by-Step

### Step 1: Analysis of the Original Website (Manual)
- Visited https://disruptiveadvertising.com/ in my browser
- Studied the full page structure, section order, and content hierarchy
- Identified 12 distinct sections: Navigation, Hero, Client Logos, Stats, Guarantee, Reviews, Values, Timeline, Growth Problems, Audience Split, CTA, and Footer
- Noted the color palette: dark navy (#1a1a2e), accent red (#e94560), deep blue (#0f3460)
- Took notes on layout patterns, typography choices, spacing, and visual hierarchy

### Step 2: Project Initialization (Manual)
- Installed Node.js and Git on my system
- Created the Next.js project with TypeScript and Tailwind CSS:
```bash
npx create-next-app@latest disruptive-clone --typescript --tailwind --eslint --app --src-dir
npm install lucide-react
```
- Verified the development server runs correctly with `npm run dev`

### Step 3: AI-Assisted Boilerplate Generation (AI as Assistant)
- Used OpenCode AI to generate initial HTML/JSX structure for each section
- Gave the AI specific instructions based on my analysis of the original site
- The AI helped scaffold repetitive patterns like the stats cards, timeline steps, and value cards
- I reviewed and modified every block of AI-generated code to match my design vision

### Step 4: Design & Layout Decisions (Manual — My Work)
- Decided on the overall page flow and section ordering
- Chose color gradients, shadows, and visual effects
- Designed the sticky navigation with scroll-aware transparency
- Created the infinite scrolling client logo carousel animation
- Built the glassmorphism stat cards with custom backdrop blur
- Added pulse glow effects on CTA buttons for visual emphasis
- Designed the responsive grid layouts for mobile, tablet, and desktop

### Step 5: Code Writing & Refinement (Manual — My Work)
- Wrote the complete `page.tsx` with all 12 sections (800+ lines of JSX)
- Wrote custom CSS animations in `globals.css` (scroll, fade-in, pulse, gradient text)
- Configured `layout.tsx` with proper metadata and font setup
- Implemented the mobile hamburger menu with state management
- Added hover effects, transitions, and micro-interactions throughout
- Ensured semantic HTML structure and accessibility

### Step 6: Testing & Verification (Manual)
```bash
npm run build    # Build succeeded with no errors
npm run lint     # Zero lint warnings or errors
```
- Verified the site renders correctly on different screen sizes
- Checked all interactive elements (navigation, buttons, hover states)

### Step 7: Documentation (Manual)
- Wrote this documentation file myself, describing the full build process
- Included all technical details, project structure, and deployment steps

### Step 8: Version Control & Deployment (Manual)
```bash
git init
git add .
git config user.email "umerkamran6969@gmail.com"
git config user.name "Umer4534"
git commit -m "feat: Disruptive Advertising clone"
git remote add origin https://github.com/Umer4534/disruptive-clone.git
git branch -M main
git push -u origin main
```
- Created the GitHub repository at https://github.com/Umer4534/disruptive-clone
- Connected the repository to Vercel and deployed
- Live at: https://disruptive-clone.vercel.app/

---

## Website Sections (All Built by Me)

1. **Fixed Navigation** — Logo, nav links, CTA button, mobile hamburger menu, scroll-aware background transition
2. **Hero Section** — Dark gradient background, animated glow effects, dual CTAs, star rating badge
3. **Client Logo Carousel** — Infinite horizontal CSS scroll animation with 12+ brand logos
4. **Stats Bar** — 5 key metrics in glassmorphism cards (4.8 rating, 90+ clients, 160+ employees, #145 Inc 500, $450M+ managed)
5. **Risk-Free Guarantee** — Split layout with review cards sidebar and guarantee details
6. **Values / About** — 5-card grid showcasing company values (Authenticity, Top Talent, Strategy, Breakthroughs, Exclusivity)
7. **Limited Spots CTA** — Full-width urgency banner with gradient background
8. **Timeline** — 4-step client journey with numbered cards and directional arrows
9. **Growth Problems** — Split layout with checklist and 4 service cards
10. **Audience Split** — Side-by-side cards for Business Owners vs. Marketers
11. **Final CTA** — Dark gradient section with primary call-to-action and pulsing glow
12. **Footer** — 4-column layout with links, company description, and social media

---

## Key Features

- Fully responsive (mobile, tablet, desktop)
- Smooth CSS scroll animations
- Sticky navigation with scroll-based transparency change
- Animated client logo carousel
- Gradient text effects
- Glassmorphism stat cards with backdrop blur
- Pulse glow CTA buttons
- Mobile hamburger menu with state management
- TypeScript for type safety
- ESLint compliant (zero errors)

---

## How to Run Locally

```bash
# Clone the repository
git clone https://github.com/Umer4534/disruptive-clone.git

# Navigate to project directory
cd disruptive-clone

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:3000
```

---

## AI Role vs My Role

| Task | Who Did It |
|------|-----------|
| Website analysis & section planning | **Me** |
| Color scheme & visual design decisions | **Me** |
| Project setup & configuration | **Me** |
| Writing page.tsx (main component) | **Me** (AI helped scaffold initial blocks) |
| Writing globals.css (animations & theme) | **Me** |
| Writing layout.tsx (metadata & fonts) | **Me** |
| Responsive design decisions | **Me** |
| All hover effects & interactions | **Me** |
| Build testing & lint verification | **Me** |
| Git commits & push to GitHub | **Me** |
| Vercel deployment | **Me** |
| Writing this documentation | **Me** |
| Initial boilerplate generation | **AI (assistant)** |
| Generating repetitive card structures | **AI (assistant)** |

**Summary:** AI was used as a productivity tool to generate initial boilerplate and repetitive code patterns. All design decisions, structural planning, custom animations, responsive layouts, and final quality checks were done by me (Umer Kamran).

---

## Project Structure

```
disruptive-clone/
├── src/
│   └── app/
│       ├── globals.css       # Custom animations, gradients, theme (written by me)
│       ├── layout.tsx        # Root layout with metadata (written by me)
│       └── page.tsx          # Main page with all 12 sections (written by me)
├── public/                   # Static assets
├── DOCUMENTATION.md          # This file
├── package.json              # Dependencies
├── next.config.ts            # Next.js configuration
└── tsconfig.json             # TypeScript configuration
```

---

*This project was created for educational purposes as part of an HCI course assignment. The original design belongs to Disruptive Advertising. Developed by Umer Kamran (ID: 23018020063).*
