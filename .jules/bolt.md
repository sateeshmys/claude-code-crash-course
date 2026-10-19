# Bolt's Journal

## 2025-05-18 - Hero Terminal Typing Animation & Cursor Isolation
**Learning:** High-frequency state updates in landing page hero components (such as interval-based typing animations or cursor blinking state toggles every 530ms) cause full re-renders of parent container trees, including static text layout and heavy hero graphics. Replacing interval-driven cursor toggles with pure CSS keyframes (`step-end`) and isolating typing state into a sub-component (`TerminalMockup`) eliminates continuous JS timers and cuts parent re-renders to 0 during typing.
**Action:** Always replace UI toggles (like cursor blinking) with pure CSS keyframe animations, and colocate high-frequency typing state into granular sub-components.
