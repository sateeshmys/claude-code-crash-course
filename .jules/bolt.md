## 2026-05-20 - High-frequency state isolation in HeroTerminal
**Learning:** High-frequency state updates (like typing animations or cursors) in a complex parent component trigger full re-renders of all children, including static content and expensive SVG patterns.
**Action:** Isolate frequent state updates into memoized sub-components and replace JS-driven animations with CSS animations whenever possible to keep the parent component's render cycle clean.
