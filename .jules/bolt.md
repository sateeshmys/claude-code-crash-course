## 2026-06-23 - Terminal Animation Re-render Isolation

**Learning:** High-frequency state updates (like a 100ms typing animation or a 530ms cursor blink) in a top-level component trigger re-renders for the entire component tree, including expensive static sections and sibling components. In Next.js 15 Client Components, this can lead to significant main-thread activity even for simple visual effects.

**Action:** Isolate high-frequency animation state into small, memoized sub-components. For periodic visual states like blinking cursors, use pure CSS animations (`@keyframes`) instead of React state to eliminate re-renders entirely.
