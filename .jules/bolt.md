# Bolt's Performance Optimization Journal ⚡

## 2025-07-23 - State Isolation & Pure CSS Keyframe Blinking for Terminal Cursor
**Learning:** Frequent visual state updates (like blinking cursors) cause constant React component re-renders. A terminal layout with typing animations should colocate state only inside the terminal mockup component and use CSS keyframes (`step-end` or custom animation timing) to completely offload blinking logic from the JS thread.
**Action:** Extract high-frequency typing states into localized sub-components, and replace high-frequency `useState` cursor blinking with pure-CSS utility classes defined in `globals.css`.
