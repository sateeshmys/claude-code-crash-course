## 2025-05-18 - Hero Terminal React Re-render Optimization

**Learning:** Managing high-frequency visual states like terminal blinking cursors via React `useState` and `setInterval` triggers component re-renders every 530ms. Furthermore, placing typing animation state directly within top-level hero components forces entire layouts (headlines, CTA buttons, stats grids) to re-render repeatedly during state changes. Replacing JS cursor intervals with pure CSS `@keyframes` and isolating typing state to a dedicated sub-component (`TerminalMockup`) eliminates re-renders in the parent Hero component completely.

**Action:** Always offload continuous high-frequency visual states (e.g., blinking cursors, infinite pulses) to CSS keyframe animations. Colocate animated sub-states into isolated child components to prevent top-level layout re-renders.
