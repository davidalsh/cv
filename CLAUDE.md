# Portfolio CV

## Project Goal

Build a professional, beautiful, single-page CV/resume website. The design should be clean, modern, and print-friendly. Think premium resume template — strong typography, good whitespace, and visual hierarchy.

## Tech Stack

- **Vite** — build tool and dev server
- **React** — UI framework
- **TypeScript** — type safety
- **TailwindCSS** — utility-first styling

## Architecture

### Data Source

All CV content lives in a single file: `src/data/cv.ts`. This is the only file a user needs to edit to update their CV. It exports a typed object containing:

- Personal info (name, title, contact, links)
- Summary/about
- Work experience
- Education
- Skills
- Languages
- Projects
- Certifications

A corresponding `src/data/types.ts` file defines the TypeScript interfaces for the CV data.

### Components

Components live in `src/components/` and are purely presentational — they receive CV data as props and render sections. Each CV section should be its own component.

## Best Practices

- **Single responsibility**: one component per CV section
- **No hardcoded content**: all text and data comes from `cv.ts` — components never contain personal data directly
- **Responsive design**: must look great on desktop and mobile
- **Print-ready**: use `@media print` styles so the page prints cleanly as a PDF
- **Semantic HTML**: use proper heading hierarchy, `<section>`, `<article>`, `<address>` where appropriate
- **Accessibility**: proper contrast ratios, alt text, ARIA labels where needed
- **Minimal dependencies**: avoid adding extra libraries unless truly necessary — TailwindCSS handles all styling needs
- **Consistent spacing and typography**: use Tailwind's design tokens (spacing scale, font sizes) consistently rather than arbitrary values
- **Keep it one page**: the design should fit on a single viewport/printed page — be concise
