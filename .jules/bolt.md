# Bolt's Journal - Critical Learnings

## 2026-06-09 - Isolating High-Frequency Animations
**Learning:** In complex components like `HeroTerminal`, state updates for animations (e.g., typing text every 100ms) trigger full re-renders of the entire component tree, including expensive static content and SVG backgrounds. This is particularly wasteful when most of the component is static.

**Action:** Isolate high-frequency state into dedicated memoized sub-components. For periodic visual toggles like cursors, prefer CSS animations over React state to completely bypass the React reconciliation cycle.
