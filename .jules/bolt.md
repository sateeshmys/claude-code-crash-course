## 2025-05-18 - Replacing React State Cursor Blink with CSS Keyframe Animation

**Learning:** Managing high-frequency UI animations (such as a 530ms blinking terminal cursor) using React `useState` and `setInterval` causes continuous re-renders of the component and its children for the entire page lifecycle. Switching to a CSS keyframe animation (`@keyframes blink`) eliminates continuous JS-driven re-renders entirely while maintaining visual fidelity.

**Action:** Whenever implementing blinking cursors, visual pulses, or basic toggles in Client Components, use CSS keyframes (`animation: ... step-end infinite`) instead of React `useState` timers.
