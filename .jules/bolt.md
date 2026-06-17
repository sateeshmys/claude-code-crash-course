# Bolt's Performance Journal ⚡

## 2026-06-17 - Isolating High-Frequency State Updates in Hero Components
**Learning:** In Next.js/React applications, high-frequency state updates (e.g., 100ms for typing effects, 530ms for blinking cursors) in a top-level component trigger full re-renders of complex static content and SVG patterns. Pure CSS animations for visual-only states (like cursors) and memoized sub-components for isolated state updates significantly reduce the rendering workload on the main thread.
**Action:** When identifying high-frequency intervals, first check if they can be replaced by CSS animations. If state is necessary (e.g., typing text), isolate it into the smallest possible memoized sub-component to prevent parent re-renders.
