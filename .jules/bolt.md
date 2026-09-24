# Bolt's Journal - Critical Learnings

## 2025-05-18 - Replacing JS Interval State with Pure CSS Animations & Component State Isolation in HeroTerminal
**Learning:** High-frequency timer intervals in Client Components (like a terminal cursor blinking every 530ms via `useState` and `setInterval`) trigger re-renders across the entire component subtree on every tick.
**Action:** Replace JavaScript state-driven cursor toggles with a pure CSS keyframe animation (`.animate-blink`) and colocate any remaining interactive/typing animation state into a focused sub-component (`TerminalMockup`).
