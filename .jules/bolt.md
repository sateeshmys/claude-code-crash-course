# Bolt's Journal

## 2025-05-20 - Isolating Terminal Typing State & Replacing React Cursor State with CSS Animation

**Learning:** High-frequency visual states like a blinking cursor (`setInterval` toggling boolean state every 530ms) or character-by-character typing animations (`setInterval` updating state every 100ms) inside a parent container cause perpetual re-renders of the entire layout and all child elements (headlines, SVGs, CTA buttons, stats grid). Replacing cursor state toggling with a pure CSS `@keyframes blink` animation (`animation: blink 1.06s step-end infinite`) eliminates 100% of cursor-driven re-renders, and colocating typing animation state into a dedicated sub-component (`TerminalMockup`) isolates typing re-renders exclusively to the terminal display.

**Action:** When implementing terminal or typing animations in React, always isolate typing state into a child sub-component and use CSS keyframe animations for blinking cursors instead of JavaScript timers and React `useState`.
