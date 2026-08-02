# Skilline

Marketing landing page for Skilline, an online learning platform.

Built from the [Figma design](https://www.figma.com/design/7oKyVXpr0ebn9BtuGz7Bfb/school-landing)
with React 18, TypeScript, Vite and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

| Script              | Description                             |
| ------------------- | --------------------------------------- |
| `npm run dev`       | Start the Vite dev server                |
| `npm run build`     | Typecheck, then build to `dist/`         |
| `npm run preview`   | Serve the production build locally       |
| `npm run typecheck` | Run TypeScript with no emit              |

## Project structure

```
src/
  main.tsx                    React entry point
  App.tsx                     Fixed-size design canvas wrapper
  components/
    LandingPage.tsx           Composes the ten page sections
    sections/                 One file per section, top of page to bottom
      HeroSection.tsx
      PartnerLogosSection.tsx
      AllInOneSection.tsx
      WhatIsSkillineSection.tsx
      WhatYouCanDoSection.tsx
      IntegrationsSection.tsx
      TestimonialsSection.tsx
      NewsSection.tsx
      SiteFooter.tsx
      features/               "Our Features" and its five feature blocks
        FeaturesSection.tsx
        UserInterfaceFeature.tsx
        TeachingToolsFeature.tsx
        AssessmentsFeature.tsx
        ClassManagementFeature.tsx
        OneOnOneDiscussionsFeature.tsx
  assets/
    images/                   Photography and raster artwork
    svg-paths.ts              Vector path data shared across sections
    image-placeholders.ts     Inline data-URI placeholder graphics
  styles/
    index.css                 Webfonts, Tailwind entry, theme and base layer
```

`@/` is aliased to `src/` in both `vite.config.ts` and `tsconfig.app.json`.

## Layout model

This is a pixel-perfect export, not a responsive layout. Every section is
absolutely positioned against a fixed **1920 × 11494 px** canvas defined in
[`App.tsx`](src/App.tsx), which scrolls horizontally on narrower viewports.
Sections are rendered back-to-front in `LandingPage.tsx` — the header paints
last so its artwork can overlap the sections beneath it.

Converting a section to a responsive flow layout means rewriting its
positioning wholesale; the section boundaries are the natural unit of work.

## Typography

The design uses **Poppins** and **Nunito Sans**, loaded from Google Fonts in
`src/styles/index.css` and exposed as the `font-poppins` and `font-nunito`
Tailwind utilities. Weight is set with the standard `font-normal` /
`font-medium` / `font-semibold` / `font-bold` / `font-extrabold` utilities.
