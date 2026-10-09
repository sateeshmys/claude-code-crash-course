## 2026-10-09 - Terminal Cursor Animation & Typing State Colocation

**Learning:** High-frequency timer state (e.g., terminal typing animation and blinking cursor `setInterval`s) inside top-level layout components causes the entire hero layout (headings, badges, CTAs, and background grids) to re-render repeatedly every few hundred milliseconds. Replacing JS state-driven blinking with pure CSS animations (`step-end`) and isolating typing state into a child component (`TerminalMockup`) completely prevents parent layout re-renders.
**Action:** Always isolate animation states into leaf components and convert recurring UI state blinks or pulses to CSS keyframe animations.
