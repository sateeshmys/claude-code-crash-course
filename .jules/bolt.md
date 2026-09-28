# Bolt Performance Journal

## 2025-05-18 - State Colocation & Pure CSS Animation for Terminal Component
**Learning:** Storing UI blink state in React `useState` via `setInterval` forces the host component (and all static sub-trees) to re-render indefinitely on every toggle interval. Moving high-frequency typing state into an isolated sub-component (`TerminalMockup`) and replacing stateful cursor blinking with a CSS keyframe animation (`animate-blink` using `step-end`) completely removes parent re-renders.
**Action:** Always prefer CSS keyframe animations (`step-end`) over React `useState` for visual UI state like blinking cursors, and colocate high-frequency animation state into dedicated sub-components to protect static layout elements.
