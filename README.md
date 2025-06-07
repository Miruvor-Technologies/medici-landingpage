# Medici Landing Page

This is the **public landing page** for Medici — a peer-to-peer scholarships platform where donors fund verified students directly in USDC, on Solana.  
The landing page showcases our mission, explains how the platform works and captures early-access signups from interested donors and students.

---

## Key features

- **Responsive hero layout** with mission messaging and value prop  
- **Simple lead capture** form (email input)  
- **Call-to-action buttons** for both donors and students  
- **Lightweight & fast** — perfect for ad campaigns and mobile-first visitors  
- **Easy to deploy** via Vercel, Netlify, or static hosting  

---

## Project structure

```
public/                 # Logos, images, favicon  
src/  
├─ pages/               # Landing page entry point (Next.js / Vite / React)  
├─ components/          # UI sections (Hero, How It Works, FAQ, Footer)  
├─ styles/              # Tailwind or CSS modules  
tailwind.config.js      # Theme config (if Tailwind is used)  
package.json            # Scripts and dependencies  
```

---

## Getting started

```bash
pnpm install        # or yarn / npm  
pnpm dev            # runs localhost:3000  
```

The form can be wired to any backend or mailing-list tool (e.g., Formspree, Supabase, ConvertKit).  
Analytics is optional but encouraged for conversion tracking.

---

## Roadmap

- Integrate real-time form submission + CRM  
- A/B test hero copy and CTA layout  
- Add proof points or student quotes as traction grows  
- Track campaign performance with Plausible or GTM  

---

> This page is the top of the funnel for everything Medici — built to validate demand, collect leads, and grow early momentum before full launch.
