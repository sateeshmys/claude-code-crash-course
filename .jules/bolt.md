## 2025-05-20 - Replace JS state blink timer with CSS keyframe animation

**Learning:** High-frequency visual state updates in React components (such as a 530ms blinking cursor managed via `setInterval` and `useState`) cause continuous re-renders of the entire component every cycle even after user interactions/animations complete. Moving visual timing effects to standard CSS keyframes (`step-end` or `linear`) offloads rendering to the browser's compositor thread and completely eliminates React component re-renders.

**Action:** For continuous visual effects (blinking cursors, pulsing status indicators, spinning loaders), always use CSS keyframe animations instead of React `useState` / `setInterval`.
