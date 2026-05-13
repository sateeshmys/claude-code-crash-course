## 2026-05-13 - [Performance Isolation in HeroTerminal]
**Learning:** High-frequency state updates (typing animations, blinking cursors) at the top level of a component trigger full re-renders of the entire subtree. In `HeroTerminal`, this meant re-reconciling a complex grid of static content and SVG icons every 100ms.
**Action:** Isolate high-frequency state into memoized sub-components and leverage CSS animations for purely visual effects like blinking cursors to keep the React render cycle lean.
