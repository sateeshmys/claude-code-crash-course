# Bolt's Journal

## 2025-05-20 - Stateful vs CSS-driven Cursor Blinking
**Learning:** In interactive high-frequency visual elements such as a terminal cursor, using React's state management (`useState`) with an interval triggers continuous render cycles across the entire component tree every 530ms. By offloading the blinking visual state entirely to a pure CSS keyframe animation (`@keyframes blink` and `.animate-blink` class with `step-end` animation timing), we eliminate all periodic re-renders. Combined with colocating other typing states to an isolated `TerminalMockup` child sub-component, we reduce initial and idle render cycles to 0 once typing finishes, drastically boosting client-side performance.
**Action:** Always prefer CSS-driven transitions and keyframes over React state hooks (`useState`, `useEffect`) for visual animations that do not require logical conditional branching in JavaScript. Colocate state to the smallest possible sub-component scope.
