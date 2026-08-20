## 2025-05-18 - Isolate High-Frequency Animation State & Replace JS Cursor Blink with CSS

**Learning:** Managing high-frequency visual states like terminal typing animations (`100ms`) and cursor blinking (`530ms`) at a parent section component level triggers constant re-renders across the entire section DOM tree (including static headings, CTAs, badges, and stats counters). Moving cursor blinking to pure CSS `@keyframes` with `step-end` completely eliminates JS interval timers and state updates after typing completes. Colocating typing state within a dedicated sub-component (`TerminalMockup`) isolates re-renders strictly to the terminal text box.

**Action:** When implementing typing or cursor visual effects in React components, use pure CSS keyframe animations for infinite loops like cursor blinks, and isolate high-frequency state updates inside dedicated child components.
