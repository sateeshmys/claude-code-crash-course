## 2025-05-15 - Isolating High-Frequency Animation State

**Learning:** In the HeroTerminal component, the typing animation was triggering re-renders for the entire Hero section (including static content and background patterns) every 100ms. Additionally, the cursor blinking was handled via React state every 530ms, causing even more renders.

**Action:** Isolated the high-frequency typing state into a memoized `TerminalConsole` sub-component. Replaced the state-based cursor blinking with a standard CSS `@keyframes` animation. This ensures the main Hero section stays static while only the terminal text updates, reducing overall CPU usage and React reconciliation overhead.
