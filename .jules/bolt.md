## 2025-05-15 - [Hero Section Re-render Isolation]
**Learning:** High-frequency animations (typing effects, blinking cursors) implemented with React state in a large parent component cause expensive re-renders of the entire tree, including static text and complex background patterns.
**Action:** Isolate animation state into memoized sub-components and prefer CSS animations for simple, permanent visual effects like blinking cursors to reduce main-thread activity and prevent unnecessary React reconciliation.
