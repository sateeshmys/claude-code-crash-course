## 2026-06-05 - Isolated high-frequency state updates in HeroTerminal

**Learning:** High-frequency state updates (like typing animations every 100ms) in a complex parent component trigger expensive re-renders of the entire tree, including static content and SVGs.

**Action:** Isolate high-frequency state into memoized sub-components. Move decorative animations (like blinking cursors) to pure CSS using `@keyframes` and `steps()` to eliminate JS-driven re-renders entirely for those elements.
