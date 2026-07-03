# Beltway Chimney — Mobile Responsive Design Brief

A hand-off document for making the site responsive at mobile widths (target: **375px**, test also 320px & 414px). Nothing below has been changed — this is a spec of the current state and the concrete breaks.

---

## Tech stack & how styling works

- **Next.js 16 (App Router), React 19, TypeScript.** Icons via `lucide-react`.
- **No Tailwind, no CSS modules, no styled-components.** Two styling layers:
  1. `app/globals.css` — design tokens (CSS custom properties) + a few global utility classes.
  2. **`styled-jsx`** — the bulk of styling lives in `<style jsx>{...}</style>` blocks *inside each page/component file*. This matters: every responsive fix must be written as a hand-authored media query **inside the file it applies to**. There is no shared utility layer to lean on.
- **No unified breakpoint system.** Existing media queries use 600 / 768 / 900px ad hoc. Recommend standardizing on a set (e.g. 480 / 768 / 1024px) during the redesign.
- **Dark mode is active** via `@media (prefers-color-scheme: dark)` in globals.css — the site auto-switches on OS setting. **Test every fix in both light and dark.**

### Design tokens (`app/globals.css` `:root`)
- Fonts: headings `Outfit`, body `Plus Jakarta Sans` (Google Fonts `@import`).
- Colors: `--primary #e61c24` (red), `--secondary #1b3a60` (navy), `--accent #ffd166` (gold), `--dark-bg #121214`, `--light-bg #f8fafc`, `--text-muted #5e6b7e`, `--success #10b981`, `--error #ef4444`.
- Layout: `--max-width: 1200px`, `--border-radius: 12px`, `--border-radius-lg: 24px`.
- `.container` = max-width 1200px, `padding: 0 24px` (fixed at all sizes — the only horizontal gutter).
- `.section` / `.section-alt` = `padding: 100px 0` (**not reduced on mobile anywhere** — excessive whitespace on phones).
- `.grid-2` / `.grid-3` use `repeat(auto-fit, minmax(...))` — the *only* natively-fluid layouts.

---

## Pages & components

| File | What it is |
|---|---|
| `app/layout.tsx` | Root: `<Header/>` + `<main>` + `<Footer/>`. Body flex column, inline styles. |
| `app/page.tsx` | Home: Hero → Welcome/About → Services grid (6 cards) → Testimonials → Contact form → service-detail Modal. |
| `app/appointments/page.tsx` | 4-step booking wizard: progress bar → service list → calendar+time grid → contact form → receipt. |
| `app/pay/page.tsx` | Pay invoice: idle form → processing spinner → success receipt. |
| `components/Header.tsx` | Sticky glass nav (80px). **Only component with a real mobile pattern** (hamburger + drawer at 768px). |
| `components/Footer.tsx` | 3-column footer grid → 1 column at 900px. Handled. |
| `components/Testimonials.tsx` | Auto-rotating carousel; arrows hidden at 600px. |

---

## Current responsive coverage (what already exists)

| File | Breakpoints | What they handle |
|---|---|---|
| `globals.css` | none (only dark-mode) | auto-fit grids collapse naturally; nothing else |
| `Header.tsx` | 768px | Hides desktop nav + book btn, shows hamburger drawer. ✅ Handled |
| `Footer.tsx` | 900px | grid → 1 column. ✅ Handled |
| `Testimonials.tsx` | 600px | card padding shrinks, arrows hidden. ~OK |
| `page.tsx` | 900px, 768px | welcome-grid→1col, form-row→1col, h1 3.5→2.75rem |
| `appointments/page.tsx` | 768px, 600px | calendar-time-grid→1col, form-row→1col |
| `pay/page.tsx` | 600px | card padding, express-buttons→1col |

---

## Concrete breaks at 375px — prioritized

### 🔴 P1 — Pay page form rows never collapse
`app/pay/page.tsx`. Two `.form-row`s (`grid-template-columns: 1fr 1fr`) — invoice#/amount and expiry/CVV — are **never collapsed**; the 600px query only touches `.express-buttons` and padding. At 375px two number inputs (`padding: 14px 18px`) sit side-by-side (~130px each) with long labels ("Invoice / Reference # (Optional)", "Payment Amount ($ USD)") → cramped/overflow.
**Fix:** collapse both `.form-row` to `1fr` under ~600px.

### 🔴 P2 — Home stat-overlay causes horizontal overflow
`app/page.tsx`, `.stat-overlay` is absolutely positioned `bottom: -20px; left: -20px` on `.welcome-image-container`. When the image column centers on mobile, `left: -20px` hangs off the left edge → page-level horizontal scroll at 375px.
**Fix:** reposition/inset the overlay on mobile (e.g. `left: 0` or move inline) and ensure no `overflow-x`.

### 🔴 P3 — Header crowds at 375px
`components/Header.tsx`. Only `.desktop-nav` + `.nav-book-btn` are hidden at 768px — the `.phone-cta` (phone number + icon) stays visible. At 375px: logo text (`1.4rem`) + full phone number + hamburger compete → crowd/overflow.
**Fix:** hide phone-cta text (or shrink to icon-only) and/or reduce logo below ~480px. Note `.glass-nav` height 80px is hardcoded and `.mobile-drawer top: 80px` must stay in sync.

### 🟠 P4 — Hero h1 still oversized
`app/page.tsx`, `h1 font-size: 3.5rem`, reduced only to `2.75rem` (~44px) at 768px — no further step down. Still large for "Professional Chimney Safety & Sweeping" at 375px; `letter-spacing: -1px`. Badge string is long + uppercase → wraps awkwardly in its pill.
**Fix:** add a <480px step (or fluid `clamp()`), tighten badge.

### 🟠 P5 — Appointments Step 1 cards + progress bar don't stack
`app/appointments/page.tsx`.
- `.service-option-card` is `flex; justify-content: space-between` (name+duration left, price+radio right, `gap: 20px`, `padding: 24px`) with **no stacking** — long names ("Rotary Creosote Glaze Removal") squeeze against the price at 375px.
- `.progress-bar-steps` = 3 `.step-node` (each `width: 100px`) + connectors, **no mobile breakpoint** — labels under 36px circles crowd.
- `.calendar-card` / `.days-grid` (`repeat(7, 1fr)`, `.cal-day height: 40px`) padding `32px` not reduced → 7-col grid gets ~30px cells, weekday labels may truncate.
**Fix:** stack service cards vertically; shrink/stack progress steps; reduce calendar-card padding on mobile.

### 🟡 P6 — Global section padding unreduced
`.section` / `.section-alt` `padding: 100px 0` everywhere with no mobile override → excessive vertical whitespace on Home & Testimonials.
**Fix:** reduce to ~48–64px under 768px globally in `globals.css`.

### 🟡 P7 — Miscellaneous no-wrap / fixed sizes
- Home `.modal-content padding: 40px` not reduced on mobile — eats width. `.modal-footer` two buttons, no wrap.
- Testimonials `.testimonial-card min-height: 280px`, `.quote-text 1.15rem` not reduced — long quotes may overflow.
- Appointments `.receipt-row` (label vs value, no wrap; `.r-address max-width: 250px`) and Pay `.receipt-actions` (Print + "Make Another Payment", no wrap) can overflow narrow rows.
- No fluid `clamp()` typography anywhere — all font sizes are fixed rem/px.

---

## Guidance for the redesign

1. **Add a `<480px` breakpoint** across the board — most existing fixes stop at 600/768px and leave true-phone widths (320–414px) unhandled.
2. **Kill horizontal overflow first** (P2, P3) — verify no page-level `overflow-x` at 375px before anything else.
3. **Collapse all remaining 2-column `.form-row` / flex layouts** to single column (P1, P5).
4. **Introduce fluid typography** (`clamp()`) for hero/section headings rather than stepped breakpoints.
5. **Reduce global section padding** on mobile (P6) — one change in `globals.css` improves every page.
6. Remember: fixes go **inside each file's `styled-jsx` block**, plus shared changes in `globals.css`. **Test light + dark** at 320 / 375 / 414px.
