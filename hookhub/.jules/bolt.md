## 2026-05-15 - HeroTerminal Re-render Optimization
**Learning:** High-frequency states like typing animations and blinking cursors in a top-level component cause the entire component tree to re-render, even if the content is static. Isolating these states into a memoized sub-component (state colocation) and replacing state-based animations with CSS keyframes significantly reduces re-renders.
**Action:** Always check for high-frequency states in large components. Isolate state in child components and prefer CSS animations for visual-only effects like blinking cursors.
