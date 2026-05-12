# Bolt's Performance Journal

This journal documents critical performance learnings and patterns discovered during the optimization of this codebase.

## 2025-05-15 - Initial Journal
**Learning:** Initializing the journal to track performance optimizations.
**Action:** Always document significant performance findings here.

## 2025-05-15 - [HeroTerminal Optimization]
**Learning:** High-frequency state updates (100ms for typing, 530ms for cursor) in `HeroTerminal` were triggering full re-renders of the entire hero section, including complex SVG-like patterns and static content.
**Action:** Isolate high-frequency animations into memoized sub-components and replace React-managed periodic animations (like cursors) with CSS @keyframes to reduce main-thread activity and prevent unnecessary component re-renders.
