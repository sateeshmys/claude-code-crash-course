# Bolt Journal

## 2025-05-20 - Terminal Cursor & Typing Animation State Isolation
**Learning:** High-frequency timer state (e.g. cursor blinking state updated every 530ms via `useState`) in hero/container components causes unnecessary re-renders of all static sibling elements (headlines, stats, buttons). Replacing JS state cursor toggling with pure CSS `@keyframes blink` animation (`animation: blink 1.06s step-end infinite`) eliminates cursor-driven re-renders entirely. Furthermore, colocating typing animation state inside an isolated sub-component (`TerminalMockup`) prevents typing state updates from re-rendering the parent `HeroTerminal` section.
**Action:** Always replace state-based visual blinking with CSS animations and colocate typing interval states into dedicated leaf sub-components.
