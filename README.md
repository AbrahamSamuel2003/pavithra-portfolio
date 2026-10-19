# Pavithra S — Portfolio (React + Vite)

## Run it

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production build in /dist
```

## Deploy to Netlify

Netlify reads `netlify.toml` (build: `npm run build`, publish: `dist`).
Either drag the `dist` folder into Netlify, or connect the repo.

**Contact form:** the form uses Netlify Forms. After the first deploy, open
Netlify → Forms → Form notifications → add an email notification to
`lishakinshily@gmail.com` so messages reach her inbox.

## Edit the content

Everything (text, skills, projects, links) lives in **`src/data.js`**.

- `profile.github` — paste her GitHub URL and a GitHub link appears in the hero, contact and footer.
- `projects[].demo` / `projects[].code` — paste URLs and "Live demo ↗" / "Source code ↗" links appear on that project.
- Photo: replace `public/pavithra.webp`.
- Resume: replace `public/Pavithra_S_Resume.pdf`.

## Structure

```
src/
  App.jsx            page assembly, loader, active-section tracking
  data.js            all content
  hooks.js           useInView, useCountUp, useActiveSection
  styles.css         colour tokens, layout, all animations
  components/
    Hero, About, Skills, Projects, Timeline (Experience + Education),
    Contact, Nav, Footer, Decor (SVG leaves/stars), UI (Reveal, Magnetic, Tilt, Cursor, Loader, ScrollProgress)
```

## Palette

| Token | Hex | Use |
|---|---|---|
| Mocha Cream | `#E8DCC6` | background |
| Deep Burgundy | `#722F37` | headings, buttons, accents |
| Cosmic Latte | `#B7A89A` | borders, pedestal, muted decor |
| Ink | `#2B1A1D` | body text |

Animations respect `prefers-reduced-motion` (everything shows in its final state, no movement).
