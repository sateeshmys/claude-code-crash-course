## 2025-05-18 - Isolated Terminal Typing State and CSS Cursor Animation

**Learning:** Replacing `useState`-driven cursor blink toggles (`setInterval` updating state every 530ms) with a CSS keyframe animation (`animate-blink`) eliminates unnecessary component render cycles. Furthermore, isolating typing state into a sub-component (`TerminalMockup`) prevents re-rendering the parent `HeroTerminal` layout component on every typed character.

**Action:** Whenever implementing animated CLI/terminal mockups or blinking UI elements, use pure CSS animations for visual state loops and isolate typing/text state inside sub-components.
