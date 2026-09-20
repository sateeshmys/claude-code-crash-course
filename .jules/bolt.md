## 2025-05-18 - Isolate High-Frequency Terminal Typing and Cursor Blink State

**Learning:** Managing high-frequency animations (like typing terminal commands every 100ms and cursor blinking toggles every 530ms) in top-level landing page components triggers constant full-tree re-renders of static elements (headings, stats, CTA buttons). Replacing state-driven cursor toggles with pure CSS keyframes (`step-end` animation) and collocating typing state inside a dedicated sub-component (`TerminalMockup`) completely prevents parent re-renders.

**Action:** Whenever a component contains interval-based visual effects (blinking cursors, typing simulations, periodic tickers), offload pure visual state to CSS animations where possible, or isolate dynamic state into child components so parent layout elements remain unaffected.
