## 2025-02-18 - Replacing React State Cursor Blink with CSS Keyframes and Colocating Animation State

**Learning:** High-frequency visual state updates like terminal cursor blinking (e.g. `setInterval` state update every ~500ms) re-render the entire component subtree continuously if placed in a top-level section component (such as `HeroTerminal`). Additionally, typing animation state re-renders static hero markup (headings, CTAs, matrix backgrounds, stats). Replacing timer-driven React state with a pure CSS `@keyframes blink` animation eliminates all cursor re-renders completely. Colocating typing animation state inside a sub-component (`TerminalMockup`) prevents typing state updates from re-rendering outer static Hero elements.

**Action:** When creating animated CLI mockups or terminal previews in React components, implement cursor blinking via pure CSS utility classes (`animate-blink`) and isolate typing animation state into sub-components.
