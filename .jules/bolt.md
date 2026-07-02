## 2026-05-20 - Terminal re-render bottleneck
**Learning:** High-frequency visual states like terminal typing and cursor blinking in `HeroTerminal` trigger unnecessary re-renders of the entire component tree, including static headlines and descriptions.
**Action:** Isolate high-frequency state into memoized sub-components and replace React-based timers with pure CSS animations where possible.
