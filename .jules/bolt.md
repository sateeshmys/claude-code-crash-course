## 2026-05-22 - [Optimizing Terminal Animation Performance]
**Learning:** High-frequency state updates (like typing animations) in React components can cause unnecessary re-renders of the entire parent component tree, including complex static content or SVGs. Isolating this state into a memoized sub-component prevents the parent from re-rendering on every interval tick. Additionally, replacing state-driven animations (like a blinking cursor) with pure CSS animations further reduces the JavaScript execution load and main-thread activity.

**Action:** Identify components with frequent state updates (intervals < 500ms) and move that state into the smallest possible memoized sub-component. Use CSS animations for simple toggling or visual effects instead of `useState` + `setInterval`.
