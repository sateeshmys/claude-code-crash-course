## 2026-05-22 - [Isolating High-Frequency State in HeroTerminal]
**Learning:** High-frequency state updates (100ms for typing, 530ms for cursor) in a complex parent component like `HeroTerminal` cause excessive re-renders of static SVG content and layout. Memoization of the parent isn't enough because the state is owned by it.
**Action:** Move high-frequency animation state into specialized, memoized sub-components and replace JS-driven animations with pure CSS wherever possible (e.g., blinking cursor) to keep the parent component's render cycle clean.
