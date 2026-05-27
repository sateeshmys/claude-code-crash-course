## 2026-05-20 - [Isolate high-frequency animations in HeroTerminal]
**Learning:** High-frequency state updates (100ms for typing, 530ms for cursor) in a large React component like `HeroTerminal` trigger full-component re-renders, causing unnecessary overhead for static parts of the UI.
**Action:** Isolate these animations into memoized sub-components and use CSS animations for non-state-dependent effects like a blinking cursor to minimize React's reconciliation work.
