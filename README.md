# Headless WP → Next.js Landing Page

A proof-of-concept landing page built with **Next.js (App Router, TypeScript, Tailwind CSS)** consuming headless content modeled as WordPress CPT/ACF (mocked via local JSON). Deployed on **Vercel** with production best practices.

---

## 🚀 Live Demo
- **Vercel URL**: [https://headless-wp-landing-hoct-f7ovrv9st-vishalagasagi44s-projects.vercel.app](https://headless-wp-landing-hoct-f7ovrv9st-vishalagasagi44s-projects.vercel.app)  
- **GitHub Repo**: [https://github.com/vishalagasagi44/headless-wp-landing](https://github.com/vishalagasagi44/headless-wp-landing)

---

## 🛠️ Tech Stack
- **Next.js (App Router)** — TypeScript, Server Components
- **Tailwind CSS** — Responsive, accessible UI
- **Headless WP content model** — simulated with `data/services.json`
- **Vercel** — Deployment + ISR/SSR support
- **Lighthouse** — CWV verification

---

## 📂 Project Structure
```
app/
 ├─ page.tsx         → root landing page (redirects to services)
 ├─ services/
 │   ├─ page.tsx     → Services listing
 │   ├─ head.tsx     → SEO meta + JSON-LD schema
data/
 ├─ services.json    → Mock headless CMS content
```

---

## 📋 Requirements Coverage

### ✅ TypeScript + Accessibility
- Strong typing with `Service` type.  
- Semantic HTML (`<h1>`, `<ul>`, `<li>`).  
- Tailwind utilities ensure responsive layout.

### ✅ Content Fetch (ISR vs SSR reasoning)
- Mocked services imported from `data/services.json`.  
- **Reasoning**:  
  - Real-world: would fetch via WPGraphQL/REST API with `revalidate` (ISR).  
  - Here: static import chosen to simplify demo + avoid deployment failures.  
  - ✅ Demonstrates same filtering logic (`status: "published"` simulates draft vs preview flow).

### ✅ SEO
- Added `head.tsx` in `/services` with:
  - `<title>` + `<meta>` description  
  - OpenGraph + Twitter tags  
  - JSON-LD Schema (`@type: Service`)

### ✅ Performance
- Verified Lighthouse results:  
  - **Performance: 100**  
  - **Accessibility: 100**  
  - **Best Practices: 100**  
  - **SEO: 60** (basic tags in place; could improve further with sitemap, robots.txt, canonical URLs)  

📸 Screenshot included below:  
![Lighthouse Screenshot](./docs/lighthouse.png)

### ✅ Preview Flow
- `status` field in JSON supports `"draft"` vs `"published"`.  
- Only `"published"` services displayed.  
- In production WP, would connect to Preview API.

---

## 🧪 Perf Results
- **LCP** ≤ 2.5s  
- **CLS** = 0  
- **INP** = Good  

---

## 🔍 Trade-offs & Notes
- Mock JSON import instead of API fetch (simplified for assignment).  
- Redirect root `/` → `/services` for cleaner demo.  
- ISR (`revalidate`) reasoning explained in README though not used (mock content doesn’t change).

---

## 🤖 AI Usage & Guardrails
- **AI was used** (ChatGPT) for:  
  - Project scaffolding guidance (Next.js setup, Tailwind config).  
  - Boilerplate code suggestions (ISR vs SSR patterns, SEO tags).  
  - README drafting.  

- **Guardrails applied**:  
  - Reviewed and tested all generated code manually.  
  - Adjusted AI output for project requirements.  
  - Final performance/SEO validated with Lighthouse.  

---

## 📸 Screenshots
- `/docs/lighthouse.png` (Lighthouse results)  
- `/docs/services.png` (Services page UI)  

---

## 📦 Deployment
- Push to `main` → auto-deploys on Vercel.  
- Redirects configured in `next.config.js`.

---

## 📈 Next Steps (if extended)
- Connect real WPGraphQL API.  
- Add dynamic ISR revalidation.  
- Expand preview flow with WP drafts.  
- Improve SEO (canonical, sitemap, robots.txt).
