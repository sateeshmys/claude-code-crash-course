## 2025-05-02 - Hero Animation Performance Optimization
**Learning:** High-frequency React state updates for simple visual effects like typing and blinking cursors cause expensive re-renders of entire parent components.
**Action:** Isolate high-frequency animation state into specialized, memoized sub-components and prefer CSS-based animations for permanent visual effects like blinking cursors to reduce React main-thread activity.
