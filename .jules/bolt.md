## 2025-05-15 - Isolating Animation State in React
**Learning:** High-frequency state updates (like typing animations or cursors) in a parent component trigger re-renders for the entire component tree, which can be expensive if the component contains complex SVGs or heavy layouts.
**Action:** Move high-frequency state into isolated, memoized sub-components and prefer CSS animations (@keyframes) for simple visual effects like blinking cursors to reduce React main-thread activity and reconciliation overhead.
