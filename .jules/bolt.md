## 2025-05-15 - [React Re-render Optimization in Hero Components]
**Learning:** High-frequency state updates (like typing animations) in a top-level component cause unnecessary re-renders of the entire component tree, including static text and complex SVG/CSS backgrounds.
**Action:** Isolate high-frequency animation state into small, specialized sub-components and use CSS animations for permanent effects like blinking cursors to reduce React reconciliation overhead.
