# TREXX Solutions

**Your Business. Reimagined with AI.**

The official landing page for **TREXX Solutions**, an AI technology and automation company. Our main product is the **AI Receptionist**, a voice AI agent that answers calls, books appointments and captures leads around the clock. We also build workflow automation, custom websites and backend systems.

---

## ✨ Highlights

- **Dark design inspired by Framer**: a black (`#050505`) base with electric-blue accents, large type and plenty of spacing.
- **Interactive hero dashboard**: a demo of the AI receptionist with an incoming-call alert, a live transcript, the booking status, a customer info panel, a call summary and a workflow view. Visitors can switch between three industry scenarios.
- **AI Receptionist voice demo**: animated sound waves, a speaking/listening indicator, clickable conversation turns and a call timer.
- **"Without TREXX vs. With TREXX AI" comparison**: shows how missed calls lose clients and how the AI agent keeps them.
- **Services grid**: a large featured card for the flagship product, plus smaller cards for the other services and an expandable section with website packages and add-ons.
- **Industries section**: use cases for healthcare, real estate, hospitality, e-commerce, professional services and startups.
- **Google Maps setup**: we add client websites to their Google Maps listing where needed.
- **Working contact form**: validates input, shows error and success messages, and lets visitors contact us by email or WhatsApp.
- **Responsive and accessible**: works on mobile, tablet and desktop, with a mobile menu, labelled form fields and SEO metadata.

---

## 🛠 Tech Stack

| Layer      | Technology                        |
| ---------- | --------------------------------- |
| Framework  | React 19 + TypeScript             |
| Build Tool | Vite 6                            |
| Styling    | Tailwind CSS v4                   |
| Animation  | Framer Motion                     |
| Icons      | Lucide React                      |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/shivam5369/Trexx_Solutions.git
cd Trexx_Solutions
npm install
```

### Development

```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

### Production Build

```bash
npm run build
npm run preview
```

The optimized output is generated in the `dist/` folder.

---

## 📁 Project Structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                    # Sticky navigation bar with blur and mobile menu
│   │   ├── HeroSection.tsx               # Hero section and interactive receptionist dashboard
│   │   ├── TrustSection.tsx              # Introduction and philosophy
│   │   ├── ServicesSection.tsx           # Services grid, packages and add-ons
│   │   ├── FeaturedAIReceptionist.tsx    # Voice demo, comparison and capabilities
│   │   ├── HowItWorks.tsx                # Discover → Build → Scale
│   │   ├── IndustriesAndWorkSection.tsx  # Industry use cases and Google Maps section
│   │   ├── WhyTrexxSection.tsx           # Why choose TREXX
│   │   ├── FinalCTAAndContact.tsx        # Final call to action and contact form
│   │   └── Footer.tsx                    # Footer and legal pop-ups
│   ├── data/
│   │   └── siteData.ts                   # All site text: services, packages, industries, contact info
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                         # Tailwind and global styles
├── index.html                            # SEO metadata and fonts
├── vite.config.ts
└── package.json
```

> 💡 Most of the site's text (services, pricing, industries and contact details) lives in `src/data/siteData.ts`, so you can update it without touching the components.

---

## 🧩 Services

- **AI Receptionists & Voice AI Agents** *(Flagship)*
- Intelligent Business & WhatsApp Automation
- Custom UI/UX & Brand Web Design
- Fast Full-Stack Web & SaaS Development
- Custom Backend, Databases & Admin Portals
- SEO, Google Maps Presence & Cloud Support

---

## ☁️ Deployment

The site can be deployed to **Vercel**, **Netlify** or any static host:

- **Build command:** `npm run build`
- **Output directory:** `dist`

---



© TREXX Solutions. All rights reserved.
