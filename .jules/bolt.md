## 2026-05-15 - Optimizing High-Frequency Terminal Animation

**Learning:** In React components with high-frequency state updates (like typing animations or blinking cursors), every state change triggers a full re-render of the component and all its children. If the component contains complex layouts, SVG icons, or multiple child components, this becomes a significant performance bottleneck.

**Action:** Isolate high-frequency state into small, memoized sub-components. Replace visual states that follow regular intervals (like blinking) with pure CSS keyframe animations to completely bypass the React render cycle.
