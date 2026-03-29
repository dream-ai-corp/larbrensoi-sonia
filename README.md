# L'Arbre En Soi — Site Web Officiel

Modern, sales-focused website for Sonia's sylvotherapy & energy healing practice.

🌐 **Live:** [larbrensoi-sonia.com](https://www.larbrensoi-sonia.com)

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deploy:** Vercel

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import this repo: `dream-ai-corp/larbrensoi-sonia`
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy** — done.

No environment variables required for the base site.

## Structure

```
app/
  layout.tsx     # SEO metadata, fonts
  page.tsx       # Full landing page
  globals.css    # Base styles + Google Fonts
tailwind.config.ts  # Custom colors (forest, cream, gold, sage)
```

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `forest-800` | `#1e6e1e` | Primary dark green |
| `forest-700` | `#185818` | CTAs, nav |
| `cream` | `#FAF7F0` | Page background |
| `gold` | `#C9A96E` | Accents, highlights |
| `sage` | `#7A9E7E` | Subtitles, labels |

## Page Sections

1. **Nav** — Sticky, transparent → solid on scroll
2. **Hero** — Benefits-first headline, dual CTA, live availability badge
3. **Trust bar** — 4 key stats
4. **Problem/Solution** — Pain points + benefits
5. **Services** — 3 cards with prices (popular highlighted)
6. **How it works** — 3-step process
7. **About Sonia** — Trust + credentials
8. **Testimonials** — 4 client reviews
9. **FAQ** — 5 accordion items handling objections
10. **Booking form** — Lead capture with success state
11. **Footer** — Contact, links, legal disclaimer
