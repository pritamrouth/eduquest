# EduQuest

> A production-grade student learning platform delivering real-time performance analytics, gamified assessments, and personalized learning paths.

---

## 1. Executive Summary

EduQuest is a full-stack learning management system designed for K-12 institutions. It solves the fragmented student experience by unifying assessments, quizzes, performance tracking, doubt resolution, and lesson planning into a single, responsive dashboard.

### Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT (SPA)                         │
│  React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui   │
├─────────────────────────────────────────────────────────────┤
│                     STATE & ROUTING                         │
│        React Query (server state) + React Router v6         │
├─────────────────────────────────────────────────────────────┤
│                      UI LAYER                               │
│   Radix UI Primitives + Recharts + Lucide Icons + Vaul     │
├─────────────────────────────────────────────────────────────┤
│                    BUILD PIPELINE                            │
│        Vite + SWC (esbuild) + PostCSS + ESLint             │
└─────────────────────────────────────────────────────────────┘
```

| Route | Module | Purpose |
|-------|--------|---------|
| `/` | Dashboard | KPI cards, performance trends, leaderboard, calendar |
| `/assessments` | Assessments | Assignment list with status tracking and scoring |
| `/quizzes` | Quizzes | Gamified quiz engine with XP, streaks, and progress |
| `/doubts` | Doubts | Q&A submission with counseling session booking |
| `/lesson-plan` | Lesson Plan | Weekly schedule view with per-session detail |
| `/report-card` | Report Card | Subject-wise GPA, class rank, and trend analysis |

---

## 2. Tech Stack & Design Decisions

| Technology | Version | Why |
|------------|---------|-----|
| **React** | 18.3 | Mature ecosystem, concurrent features, strong hiring pool |
| **TypeScript** | 5.8 | Type safety across components, hooks, and API contracts |
| **Vite** | 5.4 | Sub-second HMR, native ESM, SWC-based compilation |
| **SWC** | via `@vitejs/plugin-react-swc` | 20x faster transpilation vs Babel for dev/build cycles |
| **Tailwind CSS** | 3.4 | Utility-first styling, zero runtime CSS, design token system via HSL |
| **shadcn/ui** | latest | Copy-paste accessible components on Radix primitives |
| **Radix UI** | 1.x | Unstyled, accessible primitives (WAI-ARIA compliant) |
| **React Router** | 6.30 | File-based route semantics, nested layouts, type-safe params |
| **React Query** | 5.83 | Server-state caching, background refetch, optimistic updates |
| **Recharts** | 2.15 | Declarative chart composition, React-native API |
| **Zod** | 3.25 | Runtime schema validation, TypeScript inference from schemas |
| **React Hook Form** | 7.61 | Performant forms (uncontrolled), validation via Zod resolver |
| **Lucide React** | 0.462 | Tree-shakeable icon set, consistent design language |
| **ESLint** | 9.32 | Flat config, TypeScript-aware rules, React Hooks plugin |
| **PostCSS** | 8.5 | Tailwind pipeline, autoprefixer for browser support |

---

## 3. Key Features & Production-Ready Standards

### Performance
- **Code splitting** via Vite's dynamic `import()` per route
- **Tree-shaking** of Radix primitives and Lucide icons (zero unused code in bundle)
- **CSS optimization** — Tailwind purges unused utilities; zero runtime CSS-in-JS
- **SWC compilation** — 20x faster than Babel, near-instant dev server restarts

### Security
- **No server-side secrets** in client bundle — all env vars prefixed `VITE_` are public-safe
- **XSS protection** via React's default JSX escaping + sanitized markdown
- **CSP-ready** — no inline scripts or `eval()` usage

### Scalability & Maintainability
- **Design token system** — HSL-based CSS custom properties for theming (light/dark)
- **Component architecture** — Atomic design: `ui/` (primitives) → `dashboard/` (composed) → `pages/` (routes)
- **Type-safe routing** — TypeScript interfaces for all route params and form schemas
- **Responsive by default** — Mobile-first grid system, adaptive typography, touch-friendly interactions

### Accessibility
- **WAI-ARIA compliant** via Radix UI primitives
- **Keyboard navigation** — full tab order, focus management in modals/sheets
- **Color contrast** — WCAG AA compliant HSL palette with semantic color tokens

---

## 4. Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x (or **bun** >= 1.0)

### Local Development

```bash
# 1. Clone the repository
git clone <YOUR_GIT_URL>
cd eduquest

# 2. Install dependencies
npm install

# 3. Start the dev server (port 8080)
npm run dev

# 4. Open in browser
open http://localhost:8080
```

### Build for Production

```bash
# Optimized production build (output: dist/)
npm run build

# Preview the production build locally
npm run preview
```

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_API_URL` | No | Backend API base URL (defaults to `/api`) |

---

## 5. Testing & Quality Assurance

### Linting

```bash
# Run ESLint (flat config, TypeScript + React rules)
npm run lint
```

**Linting rules enforced:**
- `eslint-plugin-react-hooks` — Rules of Hooks violation detection
- `eslint-plugin-react-refresh` — Fast Refresh compatibility checks
- `typescript-eslint` — Type-aware linting with recommended presets

### Type Checking

```bash
# TypeScript strict mode via tsconfig
npx tsc --noEmit
```

### Code Quality Standards

| Check | Tool | Scope |
|-------|------|-------|
| Linting | ESLint 9 (flat config) | `*.ts`, `*.tsx` |
| Type Safety | TypeScript 5.8 | Full project |
| Formatting | Tailwind `clsx` + `twMerge` | Class name conflicts |
| Component Patterns | Radix + shadcn/ui | Accessible primitives |

---

## 6. CI/CD & Deployment

### Build Pipeline

```
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│  Lint    │───>│  Type    │───>│  Build   │───>│  Deploy  │
│  (ESLint)│    │  Check   │    │  (Vite)  │    │          │
└──────────┘    └──────────┘    └──────────┘    └──────────┘
```

### Deployment Targets

| Platform | Command | Notes |
|----------|---------|-------|
| **Vercel** | `vercel --prod` | Auto-detects Vite, edge functions ready |
| **Netlify** | `netlify deploy --prod` | SPA redirect rules included |
| **Docker** | `npm run build && nginx:alpine` | Static file serving |
| **AWS S3 + CloudFront** | `aws s3 sync dist/ s3://bucket` | CDN-backed static hosting |

### Recommended GitHub Actions Workflow

```yaml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run lint
      - run: npx tsc --noEmit
      - run: npm run build
```

---

## Project Structure

```
eduquest/
├── public/                    # Static assets
├── python-server/             # Flask server (knowhy template)
├── src/
│   ├── components/
│   │   ├── dashboard/         # Composed dashboard widgets
│   │   │   ├── CalendarWidget.tsx
│   │   │   ├── Leaderboard.tsx
│   │   │   ├── NotificationPanel.tsx
│   │   │   ├── PerformanceCard.tsx
│   │   │   ├── StrengthsWeaknesses.tsx
│   │   │   └── StudentProfile.tsx
│   │   ├── ui/                # shadcn/ui primitives
│   │   ├── Navbar.tsx
│   │   └── NavLink.tsx
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions
│   ├── pages/                 # Route-level components
│   │   ├── Index.tsx
│   │   ├── Assessments.tsx
│   │   ├── Quizzes.tsx
│   │   ├── Doubts.tsx
│   │   ├── LessonPlan.tsx
│   │   ├── ReportCard.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css              # Design tokens (HSL)
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

---

## License

Private. All rights reserved.
