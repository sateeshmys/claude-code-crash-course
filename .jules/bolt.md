## 2026-05-20 - HeroTerminal Render Isolation
**Learning:** High-frequency state updates (typing effects, blinking cursors) in a top-level component trigger full re-renders of the entire component tree, including static content and complex SVGs. Moving these updates into memoized sub-components and utilizing CSS animations for UI-only changes significantly reduces the render burden.
**Action:** Always isolate state that updates frequently into the smallest possible component scope. Use CSS animations for periodic UI changes like blinking cursors to avoid React state updates entirely.
