## 2026-05-20 - HeroTerminal Render Optimization
**Learning:** High-frequency visual states like blinking cursors and typing animations implemented with React `useState` in a parent component cause the entire subtree to re-render. In this case, `HeroTerminal` was re-rendering ~10 times per second.
**Action:** Isolate high-frequency animations into memoized sub-components and use pure CSS animations for simple periodic visual changes (like cursor blinking) to eliminate React render cycles.

## 2026-05-20 - Next.js 15 Module Resolution
**Learning:** After significant refactoring or checking out files from different branches in Next.js 15, the `.next` cache can become stale and cause runtime errors even if the code is correct.
**Action:** Perform a clean build by deleting `.next` and restarting the dev server if mysterious 'module not found' or 'type error' issues persist during verification.
