## 2025-05-20 - Isolating Terminal Typing State & CSS Cursor Animation

**Learning:** High-frequency state updates inside landing page components (e.g., terminal command typing animation every 100ms and JS `setInterval` cursor blinking every 530ms) cause full component subtree re-renders if attached to top-level layout components like `HeroTerminal`. Replacing the JS cursor `setInterval` state with a CSS keyframe animation (`@keyframes blink`) offloads cursor toggling to CSS/GPU, and colocating typing animation state into a dedicated `TerminalMockup` sub-component prevents the parent `HeroTerminal` layout from re-rendering during animation.

**Action:** Whenever implementing animated UI components (terminals, carousels, tickers), replace toggled JS boolean state with pure CSS keyframes where possible and isolate dynamic state into narrow leaf sub-components to prevent parent layout re-renders.
