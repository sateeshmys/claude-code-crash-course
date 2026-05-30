## 2026-05-20 - HeroTerminal Re-render Optimization
**Learning:** High-frequency state updates (100ms for typing, 530ms for cursor) in a parent component trigger full re-renders of all children, including complex background patterns and SVGs. React.memo() alone on children doesn't help if the parent's state is changing rapidly and passing props down.
**Action:** Isolate high-frequency state into a dedicated, memoized sub-component. Use CSS animations for simple toggles (like cursor blinking) to eliminate React state updates entirely for those visual elements.
