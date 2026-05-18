## 2025-05-15 - [Optimize high-frequency state updates in React]
**Learning:** High-frequency state updates (like typing animations) in a complex parent component trigger expensive re-renders of the entire sub-tree, including static content and complex SVGs. This is a common performance bottleneck in React applications with rich UI animations.
**Action:** Isolate high-frequency state logic into small, memoized sub-components and use pure CSS animations for simple, repetitive visual effects like blinking cursors to reduce React's reconciliation overhead.
