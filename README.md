# Headless WP → Next.js Landing Page

## Stack
- Next.js (App Router, TypeScript, Tailwind)
- Mock WordPress API (services.json)

## ISR vs SSR
- ISR chosen for performance (static CDN cache, revalidate every 60s).
- SSR not needed since content changes infrequently.

## SEO
- Metadata API (Next.js `Metadata`)
- OpenGraph/Twitter tags
- JSON-LD Service schema

## Perf
- Lighthouse results should meet CWV targets.

## Preview Flow
- Draft flag filtering in mock API
- Could extend via WP preview tokens

## Deployment
- Hosted on Vercel after connecting repo.

## AI Use
- ChatGPT assisted in scaffolding boilerplate; coding, review, and deployment done manually.
