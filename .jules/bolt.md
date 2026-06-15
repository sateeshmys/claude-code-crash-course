## 2026-06-15 - Optimizing high-frequency terminal animations
**Learning:** In 'HeroTerminal.tsx', the terminal typing animation (100ms) and cursor blink (530ms) were driving state updates that caused the entire complex hero section to re-render. Even in Next.js 15, Client Components re-render their entire subtree when state changes unless parts are isolated.
**Action:** Isolate high-frequency state updates into memoized sub-components and replace interval-driven visual state (like cursors) with pure CSS animations to keep the parent component stable.
