## 2025-05-18 - Replacing React useState Timers with CSS Keyframe Animations for High-Frequency Visual States

**Learning:** Managing high-frequency visual states like a blinking cursor (every 530ms) using React `useState` and `setInterval` triggers frequent re-renders across the entire component tree if state is placed at the top level. Replacing timer-driven React state with a CSS keyframe animation (`@keyframes blink` with `step-end`) completely eliminates React re-renders while maintaining identical visual behavior. Additionally, colocating any remaining high-frequency state (like typing animations) inside an isolated sub-component prevents re-renders from bubbling up to parent components.

**Action:** For high-frequency purely visual animations (cursors, spinners, pulsing badges), prefer pure CSS keyframe animations. When React state is strictly necessary for sequential UI updates (e.g., character typing), colocate the state in a memoized or isolated child component.
