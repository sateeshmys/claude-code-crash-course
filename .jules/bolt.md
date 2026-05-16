## 2026-05-16 - [State Isolation for High-Frequency Animations]
**Learning:** High-frequency state updates (like typing animations or cursor blinking) in a top-level component can trigger expensive re-renders of the entire sub-tree, including static content and complex SVGs. This is particularly impactful in Next.js applications where large sections of the UI might be unnecessarily reconciled.

**Action:** Isolate high-frequency state into small, memoized sub-components (React.memo) and prefer CSS animations (@keyframes) for permanent visual effects like blinking cursors to reduce main thread activity and React reconciliation overhead.
