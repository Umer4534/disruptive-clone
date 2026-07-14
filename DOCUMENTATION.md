# Disruptive Digital — Marketing Agency Website Clone

## Project Overview

A pixel-perfect clone of [Disruptive Advertising](https://disruptiveadvertising.com/), built as a modern responsive website using AI-assisted development tools. This project demonstrates how to replicate a professional marketing agency website using cutting-edge web technologies.

---

## Tools Used

| Tool | Purpose |
|------|---------|
| **OpenCode (AI CLI)** | AI coding assistant used for code generation, scaffolding, and iterative refinement |
| **Next.js 16** | React framework for server-side rendering and static site generation |
| **Tailwind CSS v4** | Utility-first CSS framework for rapid UI development |
| **Lucide React** | Icon library for consistent, scalable icons |
| **Vercel** | Deployment platform for instant, global hosting |
| **GitHub** | Version control and code hosting |
| **VS Code** | Code editor for manual tweaks and file management |

---

## How It Was Made — Step-by-Step

### Step 1: Analysis of the Original Website
- Visited https://disruptiveadvertising.com/ and analyzed its structure
- Identified key sections: Navigation, Hero, Client Logos, Stats, Guarantee, Reviews, Values, Timeline, Growth Problems, Audience Split, CTA, and Footer
- Noted the color scheme (dark navy #1a1a2e, accent red #e94560, blue #0f3460)
- Captured the overall layout, typography, and spacing patterns

### Step 2: Project Initialization
```bash
npx create-next-app@latest disruptive-clone --typescript --tailwind --eslint --app --src-dir
npm install lucide-react
```

### Step 3: AI-Assisted Code Generation
- Used OpenCode AI to generate the initial boilerplate for each section
- Prompted the AI with specific descriptions of each section based on the original site
- Iteratively refined the output by asking for:
  - Responsive layouts (mobile-first design)
  - Smooth animations (scrolling logos, fade-in effects, pulse glow on CTAs)
  - Proper color theming matching the original brand
  - Accessible semantic HTML structure

### Step 4: Manual Refinement
- Tweaked spacing, font sizes, and color gradients for visual accuracy
- Added custom CSS animations for the client logo carousel
- Implemented sticky navigation with scroll-based transparency change
- Added hover effects on cards and buttons

### Step 5: Testing & Verification
```bash
npm run build    # ✅ Build succeeded
npm run lint     # ✅ No lint errors
```

### Step 6: Documentation
- Generated this documentation file describing the full build process

### Step 7: Deployment (Vercel)
```bash
git init
git add .
git commit -m "Initial commit: Disruptive Advertising clone"
# Push to GitHub repository
# Connect repository to Vercel for automatic deployment
```

---

## Website Sections

1. **Fixed Navigation** — Logo, nav links, CTA button, mobile hamburger menu, scroll-aware background
2. **Hero Section** — Gradient background, animated glow effects, dual CTAs, star rating badge
3. **Client Logo Carousel** — Infinite horizontal scroll animation with 12+ brand logos
4. **Stats Bar** — 5 key metrics in glassmorphism cards (4.8 rating, 90+ clients, etc.)
5. **Risk-Free Guarantee** — Split layout with review sidebar and guarantee details
6. **Values / About** — 5-card grid showcasing company values with icons
7. **Limited Spots CTA** — Full-width urgency banner with gradient background
8. **Timeline** — 4-step client journey with numbered cards and arrows
9. **Growth Problems** — Split layout with checklist and 4 service cards
10. **Audience Split** — Side-by-side cards for Business Owners vs. Marketers
11. **Final CTA** — Dark gradient section with primary call-to-action
12. **Footer** — 4-column layout with links, description, and social media

---

## Key Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll animations
- ✅ Sticky navigation with scroll effect
- ✅ Animated client logo carousel
- ✅ Gradient text effects
- ✅ Glassmorphism stat cards
- ✅ Pulse glow CTA buttons
- ✅ Mobile hamburger menu
- ✅ TypeScript for type safety
- ✅ ESLint compliant

---

## How to Run Locally

```bash
# Clone the repository
git clone <repository-url>

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

## How to Deploy

1. Push code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" → Import the repository
4. Vercel auto-detects Next.js settings — click "Deploy"
5. Your site will be live in ~30 seconds with a `.vercel.app` URL

---

## AI Prompts Used

Here are examples of prompts given to the AI assistant:

1. *"Create a Next.js project with Tailwind CSS that clones the Disruptive Advertising homepage"*
2. *"Add a hero section with dark gradient background, bold headline about wasted marketing budgets, and a glowing CTA button"*
3. *"Create an infinite scrolling client logo carousel with CSS animations"*
4. *"Add a stats section showing 4.8 rating, 90+ clients, 160+ employees, #145 Inc 500, and $450M+ managed"*
5. *"Build a risk-free guarantee section with review cards sidebar"*
6. *"Add a sticky navigation that changes from transparent to white on scroll"*

---

## Project Structure

```
disruptive-clone/
├── src/
│   └── app/
│       ├── globals.css       # Custom animations, gradients, theme
│       ├── layout.tsx        # Root layout with metadata
│       └── page.tsx          # Main page with all sections
├── public/                   # Static assets
├── package.json              # Dependencies
├── tailwind.config.ts        # Tailwind configuration
├── next.config.ts            # Next.js configuration
└── tsconfig.json             # TypeScript configuration
```

---

## License

This project was created for educational purposes as part of an HCI course assignment. The original design belongs to Disruptive Advertising.
