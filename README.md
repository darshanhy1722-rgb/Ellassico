# Elclassico Designs — Website Source

Full source for the Elclassico Designs site: homepage, gallery, contact and studio dashboard.

## Run it

```
bun install
bun run dev
```

Open http://localhost:8080

## Build for production

```
bun run build
bun run preview
```

## Layout

- `src/routes/` — one file per page (`index`, `gallery`, `contact`, `dashboard`)
- `src/components/` — `site-nav` (glass navbar), `site-footer`, `whatsapp-fab`, `reveal` (scroll animation)
- `src/hooks/use-scroll-y.ts` — scroll position for the hero parallax
- `src/styles.css` — colours, fonts, animation tokens (Tailwind v4)
- `src/assets/` — imagery

## Notes

- Fonts (Inter, JetBrains Mono) load from Google Fonts in `src/routes/__root.tsx`.
- `src/routeTree.gen.ts` is generated automatically by the router plugin — never edit it.
- WhatsApp number lives in `src/components/whatsapp-fab.tsx`; social links in `src/components/site-footer.tsx`.
