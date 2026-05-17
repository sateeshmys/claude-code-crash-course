## 2025-05-15 - HeroTerminal Render Bottleneck
**Learning:** High-frequency state updates (100ms typing, 530ms cursor) at the top level of a complex component like `HeroTerminal` cause expensive re-renders of the entire tree, including static text and complex SVG patterns.
**Action:** Isolate high-frequency state into memoized sub-components and replace React state with CSS animations where possible (e.g., blinking cursors) to reduce main thread activity and React reconciliation overhead.
