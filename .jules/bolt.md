## 2025-05-18 - Hero Terminal Re-render Optimization & Pure CSS Blinking Cursor

**Learning:** High-frequency visual states, such as a blinking terminal cursor or interactive typewriter text, cause continuous parent re-renders when defined in the root component state. In React components with heavy DOM structures (headings, matrix backgrounds, stats, SVGs), toggling a cursor state every 530ms via `useState` forces the entire component tree to re-render indefinitely.

**Action:** Replace `useState` intervals for blinking cursors with a pure CSS keyframe animation (`animate-blink` using `step-end`). Additionally, colocate typewriter animation states into a isolated sub-component (`TerminalMockup`) so typing state updates only re-render the mock terminal text rather than the whole hero section.
