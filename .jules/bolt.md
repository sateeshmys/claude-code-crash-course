## 2025-05-15 - Isolating Terminal Typing Animations & Replacing Blinking Cursor with CSS

**Learning:** Managing high-frequency visual states (like blinking cursors or typing animations) via React `useState` and `setInterval` causes continuous re-renders of parent/sibling components, degrading page performance and frame rates. Replacing state-driven toggles with CSS keyframe animations (e.g. `@keyframes blink`) and colocating typing animation state in a isolated sub-component eliminates parent re-renders completely.

**Action:** Always prefer pure CSS animations over React `useState`/`setInterval` for recurring visual-only UI state, and isolate high-frequency state into granular sub-components.
