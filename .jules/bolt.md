## 2025-05-18 - Isolate Terminal State & CSS Keyframe Cursor Animation

**Learning:** Managing continuous UI animations like blinking terminal cursors using React `useState` and `setInterval` causes endless component re-renders (every ~500ms indefinitely). Replacing the state-driven cursor toggle with a standard CSS keyframe animation (`step-end infinite`) eliminates unnecessary re-renders. Furthermore, colocating the typing animation state inside a sub-component (`TerminalMockup`) isolates the typing state updates, preventing the entire parent `HeroTerminal` (and its subcomponents) from re-rendering on every keystroke.

**Action:** Whenever implementing animated UI elements (cursors, glowing indicators, typing effects), use CSS animations for continuous loops and colocate high-frequency typing state into leaf sub-components.
