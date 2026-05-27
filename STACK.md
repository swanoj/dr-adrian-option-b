# Stack Setup

## Core stack
- Next.js App Router
- React 19
- TypeScript
- Vercel deployment
- Playwright visual regression

## Local development
```bash
npm install
npm run dev
```

App URL:
- `http://localhost:3007`
- `http://localhost:3007/wix-parity`

## Quality gates
```bash
npm run typecheck
npm run lint
npm run build
npm run test:visual:update
npm run test:visual
```

## Vercel deploy
```bash
npm run vercel:pull
npm run vercel:deploy:preview
npm run vercel:deploy:prod
```

## CI
- Workflow file: `.github/workflows/quality-gates.yml`
- Runs on push + pull request:
  - typecheck
  - lint
  - build
  - Playwright visual regression
