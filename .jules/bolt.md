## 2025-05-18 - HeroTerminal Re-render Elimination via CSS Cursor & State Colocation
**Learning:** High-frequency timer intervals in hero components (e.g., cursor blinking every 530ms via `setInterval`) re-render the entire hero section including static text, CTA buttons, and background elements.
**Action:** Replace `useState`/`setInterval` visual animations with pure CSS keyframes (`animate-blink`) and colocate any remaining dynamic typing animation state into isolated sub-components (`TerminalMockup`) to preserve parent hero component purity.
