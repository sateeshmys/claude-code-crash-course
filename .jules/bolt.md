## 2025-05-15 - Hero Terminal State Colocation and CSS Blink Optimization

**Learning:** High-frequency timer-driven visual state updates (such as terminal typing animations or blinking cursors) cause repeated re-renders of entire parent layouts if defined at top-level components. Re-rendering large static sub-trees (headlines, CTA buttons, stats cards) for UI updates every 100ms or 530ms adds unnecessary CPU overhead.

**Action:** Isolate high-frequency typing state into dedicated sub-components (`TerminalMockup`) and replace JS `setInterval` cursor toggling with pure CSS `@keyframes` animations (`animate-blink`). This reduces parent container re-renders to initial mount while keeping visual parity.
