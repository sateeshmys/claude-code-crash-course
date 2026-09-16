## 2026-09-16 - HeroTerminal Typing & Blinking Cursor Optimization

**Learning:** High-frequency state updates (100ms typing intervals and 530ms blinking cursor state updates) in landing page components like `HeroTerminal` cause continuous re-rendering of the entire component tree (left column content, headlines, buttons, stats). Replacing `useState` for cursor blinking with CSS keyframe animation (`.animate-blink`) and colocating typing animation state into a `TerminalMockup` sub-component eliminates parent re-renders completely.

**Action:** Whenever implementing animated terminal mockups or typing effects, isolate dynamic text state into a dedicated child component and use pure CSS keyframe animations for blinking cursors instead of React `useState` intervals.
