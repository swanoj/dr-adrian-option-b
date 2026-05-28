# Wix Export Full Release Kit

This package is optimized for migration into a custom stack.

## Included
- `assets/images/` deduplicated high-priority imagery
- `assets/logos/` logo/lockup assets
- `assets/fonts/` normalized webfont families (`woff2`, `woff`, `ttf` when available)
- `fonts.css` prebuilt `@font-face` declarations
- `font-map.csv` family names for direct CSS usage
- `dedup-inventory.csv` source URL to local mapping
- `checksums.sha256` integrity verification

## Install
1. Copy `assets` to `public/wix/assets`
2. Copy `fonts.css` to `app/styles/wix-fonts.css`
3. Replace `./assets/` with `/wix/assets/` inside `wix-fonts.css`
4. Import `wix-fonts.css` in your root layout
