# Bolt's Journal

## 2026-11-10 - HeroTerminal Cursor and State Colocation Optimization
**Learning:** High-frequency visual states like terminal typing animations and cursor blinking can trigger dozens of unnecessary re-renders across the entire component tree (98 renders observed in a 10-second profiling window). Replacing state-driven cursor toggles (`useState` + `setInterval` every 530ms) with pure CSS keyframe animations (`@keyframes blink` and `.animate-blink` class using `step-end`) completely eliminates periodic timer-based renders. Furthermore, isolating typing state within a sub-component (`TerminalMockup`) prevents parent tree re-rendering, dropping `HeroTerminal` renders from 98 down to just 2 (initial mount and hydration).
**Action:** Always prefer pure CSS keyframe animations over React state management for periodic visual animations, and colocate rapidly changing visual states into dedicated sub-components to prevent re-rendering the surrounding UI.
