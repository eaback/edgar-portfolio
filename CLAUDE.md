# CLAUDE.md — Edgar Backer Portfolio

Dit bestand is de projectbijbel voor Claude. Lees dit volledig voordat je iets bouwt.
Raadpleeg `projecten.md` (in de portfolio repo) voor alle projectdetails.

---

## Rollen

Claude werkt in dit project vanuit vier rollen tegelijk:

- **Security Architect** — geen plaintext credentials, veilige cookies, strict TypeScript
- **Senior Developer** — clean code, geen over-engineering, juiste abstracties
- **Designer** — warm & persoonlijk, Scandinavisch, impactvol maar functioneel
- **Business Consultant** — elke beslissing moet klanten aantrekken op Contra/Upwork/Fiverr

---

## Doel van dit project

Een **custom portfolio** die Edgar Backer positioneert als freelance fullstack developer voor:
- Scandinavische hospitality, toerisme en MKB-bedrijven
- Klanten die EU-infrastructuur, GDPR-compliance en AI-integratie zoeken
- Platforms op Contra (curated), Upwork en Fiverr

**Positionering (gebruik dit overal):**
> "Fullstack developer gespecialiseerd in Scandinavische hospitality, toerisme en MKB — met focus op EU-infrastructuur, GDPR-compliance en AI-integratie."

---

## Tech Stack

| Technologie | Versie | Reden |
|---|---|---|
| Next.js | 16.1.6 | Framework — App Router, i18n, SSR/SSG |
| React | 19.2.3 | UI library |
| TypeScript | 5.x, **strict: true** | Type safety — nooit uitzetten |
| Tailwind CSS | 4.x | Styling — CSS-first via `@theme {}` in globals.css, geen config.js |
| Framer Motion | 12.x | Animaties — parallax, scroll-based, page transitions |
| next-intl | 4.x | i18n — 5 talen (EN/NL/SV/DE/NO) |
| @next/mdx + next-mdx-remote | latest | Case studies als MDX bestanden |
| sharp | latest | Image optimization |

**Geen Once UI** — dit is een volledig custom design.

---

## Next.js 16 — Kritieke wijzigingen

- `middleware.ts` → hernoemd naar **`proxy.ts`** in Next.js 16
- next-intl plugin is **verplicht** in `next.config.ts`: `createNextIntlPlugin("./src/i18n/request.ts")`
- Root layout returnt `children as React.ReactElement` (pass-through voor locale routing)
- Locale layout in `src/app/[locale]/layout.tsx` bevat de `<html>` en `<body>` tags

---

## Design System

### Kleurenpalet

```css
--color-background: #F7F4EF   /* warm perkament */
--color-surface:    #FFFFFF
--color-text:       #1A1917   /* bijna-zwart, warm */
--color-text-muted: #8C8880
--color-border:     #E4E0D9
--color-green:      #3B6E52   /* Zweeds bosgroen — primaire accent */
--color-green-light:#EBF3EE
--color-amber:      #C8855A   /* amber/koper — secundaire accent */
--color-amber-light:#FAF0E9
```

### Typografie

- **Headings**: Urbanist (Google Font, `--font-urbanist`)
- **Body / subline**: Sora (Google Font, `--font-sora`)
- **Code**: Source Code Pro (Google Font, `--font-source-code-pro`)

### Design richting

- **Warm & persoonlijk** — bergen + technologie, fotografie op voorgrond
- **Uitgesproken animaties** — scroll-based, parallax, impactvol maar nooit afleidend
- **Scandinavisch** — veel lucht/witruimte, clean, betrouwbaar
- **Niet corporate** — persoonlijk verhaal staat centraal

### Hero foto

- **Primair**: `/public/images/hero/hero-panorama.jpeg` (breed panorama, herfst Ljungdalen)
- **Alternatief winter**: `/public/images/hero/hero-winter.jpeg` (voor case study pagina's)
- Opmerking: huidige panoramafoto is niet heel scherp — vervang zodra betere foto beschikbaar is

---

## Projecten voor portfolio

Volledig ingevuld in `../portfolio/projecten.md`. Samenvatting:

### Featured (homepage + work overzicht)

| Project | Type | Highlight |
|---|---|---|
| **De Bergen** | Client | +83% klanten, omzet verdubbeld — sterkste business case |
| **Destination Ljungdalen** | Eigen/commercieel | Volledig destinatieplatform, meest technisch ambitieus |
| **DevTop/Deveaz** | SaaS | AI proposals via Claude API, Stripe abonnementen |

### Secundair (work overzicht)

| Project | Stack highlight |
|---|---|
| IronGrip | Headless Shopify + SvelteKit (toont e-commerce skills) |
| ChefMate AI | Flutter + Claude Vision API (toont mobile + AI) |
| ClanCollApp | React Native (toont mobile basics) |

**Niet opnemen:** Simple Todo App, lege placeholders

---

## Pagina's & Structuur

```
src/app/[locale]/
├── page.tsx              ← Homepage
│   ├── Hero              (parallax foto + headline + 2 CTAs)
│   ├── FeaturedProjects  (3 kaarten: De Bergen, Ljungdalen, DevTop)
│   ├── MiniAbout         (kort persoonlijk stuk + statistieken)
│   └── CTA-sectie        ("Laten we werken" + cal.com link)
│
├── work/
│   ├── page.tsx          ← Alle projecten (visuele grid)
│   └── [slug]/
│       └── page.tsx      ← Case study (lang-scroll: probleem → aanpak → screenshots → resultaat)
│
├── about/
│   └── page.tsx          ← Over Edgar: skills, ervaring, talen, opleiding
│
├── blog/
│   ├── page.tsx          ← Blog overzicht
│   └── [slug]/
│       └── page.tsx      ← Enkel blog artikel
│
└── not-found.tsx         ← 404 pagina
```

### Route-structuur (next-intl, localePrefix: "as-needed")

- `/` → Engels (geen prefix)
- `/nl`, `/sv`, `/de`, `/no` → andere talen

---

## Componenten architectuur

```
src/components/
├── layout/
│   ├── Header.tsx        ← Navigatie + taalwisselaar (sticky, transparent op hero)
│   └── Footer.tsx        ← Copyright + social links + tagline
│
├── sections/
│   ├── Hero.tsx          ← ✅ GEBOUWD — parallax hero met Framer Motion
│   ├── FeaturedProjects.tsx
│   ├── MiniAbout.tsx
│   └── CallToAction.tsx
│
└── ui/
    ├── ProjectCard.tsx   ← Herbruikbare projectkaart
    ├── Button.tsx
    ├── Tag.tsx           ← Stack/technologie labels
    └── SectionLabel.tsx  ← Kleine uppercase labels boven secties
```

---

## Content bestanden

```
src/content/
├── work/
│   ├── en/
│   │   ├── de-bergen.mdx
│   │   ├── destination-ljungdalen.mdx
│   │   ├── devtop.mdx
│   │   ├── irongrip.mdx
│   │   └── chefmate.mdx
│   ├── nl/ sv/ de/ no/   ← Zelfde structuur per taal
│
└── blog/
    └── en/
        └── from-netherlands-to-sweden.mdx
```

---

## i18n structuur

- Configuratie: `src/i18n/routing.ts` (defineRouting)
- Server config: `src/i18n/request.ts` (getRequestConfig)
- Navigatie helpers: `src/i18n/navigation.ts` (Link, useRouter, etc.)
- Proxy (i18n routing): `src/proxy.ts` ← LET OP: heet proxy.ts, niet middleware.ts
- Vertalingen: `messages/en.json`, `nl.json`, `sv.json`, `de.json`, `no.json`

---

## Oplevering checklist

### Fase 1 — Fundament ✅ KLAAR
- [x] Next.js 16 project setup
- [x] Tailwind CSS 4 + design tokens
- [x] next-intl i18n (5 talen)
- [x] proxy.ts (Next.js 16 convention)
- [x] globals.css met design tokens
- [x] [locale]/layout.tsx met Urbanist + Sora fonts
- [x] Homepage placeholder

### Fase 2 — Core UI ✅ KLAAR
- [x] Hero component met Framer Motion parallax
- [x] Header (sticky, transparant ALLEEN op homepage, altijd zichtbaar op andere pagina's)
- [x] Footer
- [x] FeaturedProjects sectie (3 kaarten)
- [x] ProjectCard UI component (type export, stat badge, stack tags, hover)
- [x] MiniAbout sectie
- [x] CTA sectie

### Fase 3 — Work pagina's ✅ KLAAR
- [x] /work overzichtspagina (WorkGrid, featured 2-col + secondary 3-col)
- [x] /work/[slug] case study template (CaseStudy component)
- [x] CASE_STUDIES data voor alle 6 projecten (src/lib/projects.ts)
- [ ] Project screenshots toevoegen (coverImage uncommentten)

### Fase 4 — Overige pagina's (in progress)
- [x] /about pagina volledig uitgebouwd
- [x] /blog pagina placeholder
- [ ] /blog overzicht + [slug] (minimaal 1 artikel)
- [ ] /contact pagina + Resend API route (Optie A)
- [ ] 404 pagina (not-found.tsx)

### Fase 5 — Bugs & polish
- [ ] EN locale-wisselaar fix: LocaleLink gebruikt plain `<a>` tag — vervangen door next-intl `Link` met `locale` prop
  - Fix: `<Link href={pathWithoutLocale} locale={code}>` vanuit `@/i18n/navigation`
  - Reden: zonder locale prop zet next-intl geen cookie, switch werkt dan niet
- [ ] Responsive (mobile-first check alle pagina's)
- [ ] SEO: metadata, JSON-LD, OG images, sitemap, robots.txt
- [ ] Performance: Core Web Vitals check
- [ ] Portretfoto toevoegen (public/images/edgar.jpg → About pagina)
- [ ] Testimonial van De Bergen klant toevoegen

### Fase 6 — Deploy op Hetzner
- Server: Hetzner VPS met **Caddy** (reverse proxy) + **PM2** (process manager)
- Geen Coolify aanwezig
- Stappen:
  1. `npm run build` lokaal testen
  2. Repo pushen naar GitHub
  3. Op server: `git pull`, `npm ci`, `npm run build`, `pm2 start/restart`
  4. Caddy config: nieuw blok voor `edgarbacker.dev` → proxy naar Next.js poort (bijv. 3001)
  5. LET OP: ander project draait al op server — vrije poort kiezen die niet conflicteert
  6. Caddy herstart: `sudo systemctl reload caddy`
  7. DNS: A-record `edgarbacker.dev` → Hetzner server IP

### Fase 6 — Freelance activeren
- [ ] Upwork profiel aanmaken/bijwerken
- [ ] Fiverr pakketten aanmaken
- [ ] Contra aanvragen

---

## Wat Claude NIET mag doen

- `strict: false` zetten in tsconfig
- Once UI of andere UI-libraries toevoegen
- `middleware.ts` aanmaken (gebruik `proxy.ts`)
- Placeholder projecten (todo app, lege "New Project") opnemen
- Gallery sectie bouwen met stock foto's
- Commiten zonder toestemming van Edgar
- Pushen naar remote zonder toestemming

## Wat Claude altijd moet doen

- Lees dit bestand aan het begin van elke sessie
- Raadpleeg `../portfolio/projecten.md` voor projectdetails
- Gebruik design tokens via CSS variabelen — geen hardcoded kleuren
- Server Components by default, `"use client"` alleen als nodig (animaties, interactie)
- Alle tekst via next-intl — geen hardcoded strings in componenten
- Na elke werkende mijlpaal: update de checklist in dit bestand
