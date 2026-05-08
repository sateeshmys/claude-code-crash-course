## 2025-05-08 - State Isolation for High-Frequency Animations

**Learning:** In React components with high-frequency state updates (like typing animations or blinking cursors), keeping the state in a large parent component triggers expensive re-renders of the entire subtree.

**Action:** Isolate animation state into specialized, memoized sub-components. For simple periodic animations like cursors, replace React state with CSS `@keyframes` to offload the work to the browser's compositor thread and eliminate re-renders entirely.
