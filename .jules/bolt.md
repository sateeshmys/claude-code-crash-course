## 2026-06-12 - Optimize Hero Terminal Renders
**Learning:** High-frequency state updates (100ms typing, 530ms cursor) in a top-level component caused entire section re-renders, even for static content like headlines and stats. Isolating these updates into a memoized sub-component and using CSS animations for non-state-dependent visuals (cursor) significantly reduces the render count.
**Action:** Always check for high-frequency intervals in components and isolate them to prevent large tree re-renders. Use CSS animations for pure visual toggles instead of React state where possible.
