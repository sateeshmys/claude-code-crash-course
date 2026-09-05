# Bolt's Journal - Critical Learnings

## 2025-05-18 - Isolated High-Frequency Terminal Cursor & State Colocation
**Learning:** In `HeroTerminal.tsx`, state updates like cursor blinking (`setShowCursor`) and letter-by-letter typing (`setTypedText`) force the parent `HeroTerminal` component and all its static subtree elements (headline, badges, CTA buttons, stats) to re-render repeatedly every 100ms and 530ms. Replaced `useState` for cursor blinking with pure CSS `@keyframes blink` with `step-end`, and colocated typing state into a isolated `TerminalMockup` sub-component.
**Action:** Always isolate high-frequency UI animation states into small leaf sub-components or CSS keyframe animations to prevent parent component re-render cascading.
