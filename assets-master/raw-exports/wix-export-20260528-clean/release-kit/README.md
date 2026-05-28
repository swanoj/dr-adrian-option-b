# Wix Export Release Kit

This bundle contains deduplicated, publicly accessible assets exported from the live Wix site.

## Contents
- `assets/fonts/` exported font binaries (`.ttf`, plus paired `.woff/.woff2` when available)
- `assets/logos/` logo and lockup files
- `assets/images/` page and section imagery
- `dedup-inventory.csv` source URL to local file mapping
- `fonts.css` auto-generated `@font-face` definitions
- `font-map.csv` quick font family map
- `checksums.sha256` integrity checksums

## Quick Next.js Usage
1. Copy `assets/` into your app `public/wix/` folder.
2. Copy `fonts.css` into `app/styles/wix-fonts.css`.
3. Update `fonts.css` URLs from `./assets/...` to `/wix/assets/...`.
4. Import stylesheet in your root layout.

## Notes
- Assets were selected by preferring original non-transformed Wix media URLs and then larger byte size.
- A small number of Wix transformed URLs may be blocked by CDN rules.
