## 2026-07-07 - Isolate High-Frequency Animation State in HeroTerminal

**Learning:** High-frequency visual state changes (like typing animations and cursor blinking) in React components can cause excessive re-renders of the entire component tree if not properly isolated. Using React state for a 530ms blinking cursor and 100ms typing updates caused ~38 re-renders in 10 seconds.

**Action:** Isolate high-frequency state into memoized sub-components and leverage pure CSS animations (like `@keyframes blink`) whenever possible to eliminate React-driven render cycles for purely visual transitions.
