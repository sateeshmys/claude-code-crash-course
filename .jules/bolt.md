## 2026-05-21 - Isolated state for high-frequency animations
**Learning:** High-frequency visual state changes (like a blinking cursor or typing animation) in a large React component cause the entire component and its children to re-render, leading to significant performance overhead.
**Action:** Isolate high-frequency state into small, memoized sub-components and replace predictable visual states (like blinking) with pure CSS animations to eliminate React re-renders entirely.
