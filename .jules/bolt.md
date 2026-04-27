## 2025-05-22 - [React Re-renders and CSS Animations]
**Learning:** High-frequency state updates (like typing effects or blinking cursors) in a large parent component cause unnecessary re-renders of the entire subtree. Using CSS animations for visual-only effects and isolating stateful animations into leaf components significantly reduces main thread work.
**Action:** Move blinking cursors to CSS and isolate typing effects into dedicated sub-components.
