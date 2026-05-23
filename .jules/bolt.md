# Bolt's Journal - Performance Learnings

## 2025-05-15 - [HeroTerminal Optimization]
**Learning:** High-frequency React state updates (typing animations, blinking cursors) in large components trigger full-tree re-renders, causing noticeable main-thread lag and unnecessary reconciliation of static content and complex SVGs.
**Action:** Isolate high-frequency animations into memoized sub-components and leverage CSS animations for purely visual effects like blinking cursors to eliminate React re-renders entirely for those effects.
