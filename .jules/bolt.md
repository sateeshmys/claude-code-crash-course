## 2025-05-22 - [Optimized HeroTerminal Animation]
**Learning:** High-frequency state updates (100ms typing, 530ms cursor) in a complex parent component like `HeroTerminal` trigger expensive re-renders of the entire SVG/DOM tree. Isolating these into memoized sub-components and CSS-based animations significantly reduces main thread activity and React reconciliation overhead.
**Action:** Always look for high-frequency intervals in top-level components and isolate them or replace with pure CSS animations where possible.
