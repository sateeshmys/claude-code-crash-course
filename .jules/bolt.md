## 2026-05-19 - Isolating High-Frequency State Updates
**Learning:** In React components with complex render trees (e.g., SVG backgrounds, multi-column layouts), frequent state updates (like typing animations or blinking cursors every 100-500ms) can cause significant performance degradation due to whole-tree reconciliation.
**Action:** Move high-frequency state into memoized sub-components or replace with pure CSS animations whenever possible to isolate re-renders.
