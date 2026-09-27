## 2025-05-20 - CSS Keyframes vs React State Timers for UI Animations

**Learning:** Replacing state-based timers (`useState` + `setInterval` every 530ms) for visual blinking effects (like terminal cursors) with pure CSS keyframes (`animate-blink` with `step-end`) eliminates continuous React re-renders (~115 re-renders/min) without affecting component state or functionality. Additionally, colocating high-frequency typing animation state into an isolated sub-component (`TerminalMockup`) prevents re-rendering the surrounding parent component (`HeroTerminal`) and its layout tree.

**Action:** Always prefer CSS keyframe animations for purely visual recurring UI state (blinking, pulsing, rotating) instead of React state intervals, and isolate high-frequency dynamic text animations into leaf sub-components.
