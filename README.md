# HOUSE OF DUM website

Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · Lucide

## Run
    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Edit content (one file)
Open `src/data/site.ts`. Menu items, prices, address, phone, WhatsApp number,
ordering link, directions link, map embed URL, opening hours, Instagram handle,
story copy and image paths all live there. Anything in [SQUARE BRACKETS] is a
placeholder. Once you replace it, every button, the footer, the map and the
Restaurant structured data (JSON-LD) pick it up automatically.

## Add photos
Drop files into `public/images/` using the names in `images` and `menu` inside
`src/data/site.ts` (e.g. `hero-biryani.jpg`, `menu-chicken-biryani.jpg`,
`process-1-layer.jpg`, `insta-1.jpg`). Missing photos show a labelled dark
placeholder that names the file it expects. Use real, well-lit biryani photos
(landscape, about 2400px wide for the hero).

## Logo
`src/components/Logo.tsx` draws a text + arch mark. To use the real logo, swap
its body for `<img src="/images/logo.png" alt="House of Dum" className="h-10 w-auto" />`.

## Fonts and colours
Cormorant Garamond (display) and Manrope (body) load from Google Fonts in
`src/app/layout.tsx`. Colours are in `tailwind.config.ts`.
