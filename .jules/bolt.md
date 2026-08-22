## 2025-05-18 - CSS Keyframe Cursor Animation & Terminal State Colocation

**Learning:** Managing high-frequency UI updates (like cursor blinking every 530ms and character-by-character terminal typing) inside a top-level component causes unnecessary re-renders of static elements (headings, CTA buttons, stats counters). Replacing state-driven cursor toggles with pure CSS `@keyframes` (`step-end`) and isolating high-frequency typing state into a child component (`TerminalMockup`) eliminates re-renders across the outer component layout.

**Action:** Whenever implementing animated terminal or typing widgets, delegate recurring visual states (like blinking cursors) entirely to CSS animations and colocate internal typing timer state inside a dedicated sub-component.
