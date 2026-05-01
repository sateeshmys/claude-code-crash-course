## 2025-05-15 - Isolating Terminal Animations
**Learning:** High-frequency state updates (like typing effects and cursor blinking) in a large Hero component cause the entire component tree to re-render, including expensive SVG icons and static text.
**Action:** Isolate animation state into a memoized sub-component and replace React-driven cursor blinking with a CSS @keyframes animation to minimize main-thread activity and React reconciliation overhead.
