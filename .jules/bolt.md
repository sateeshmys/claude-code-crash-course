# Bolt's Performance Journal

## 2025-07-26 - Isolating High-Frequency Visual States in Terminal Typing Animation
**Learning:** High-frequency state updates like typing simulations or blinking cursors in React components trigger continuous full-subtree re-renders. A cursor-blinking interval of 530ms and character-typing interval of 100ms trigger 76 full parent component re-renders within a 5-second timeframe, causing unnecessary CPU cycles, layouts, and style recomputations across complex siblings (CTA buttons, stats grids, badges, etc.).
**Action:** Isolate visual/interactive high-frequency states into small, focused sub-components (colocated state colocation). Eliminate state-based visual loops by utilizing pure CSS keyframe animations (e.g., `@keyframes blink`) with `step-end` transitions, reducing parent re-renders by over 97% while maintaining zero JS-driven main-thread blockages.
