## 2025-05-15 - HeroTerminal Re-render Elimination via State Colocation & CSS Animation

**Learning:** Stateful visual timers (like JS `setInterval` cursor blinking) and unisolated typing animation state cause parent components (and all child tree sub-nodes like hero headers/buttons/stats) to re-render continuously (every ~100ms for typing and 530ms forever for cursor).

**Action:** Colocate high-frequency typing state inside an isolated sub-component (`TerminalMockup`) and replace JS-driven cursor blink state (`useState` + `setInterval`) with a CSS `@keyframes` animation (`step-end`). This reduces parent `HeroTerminal` re-renders from continuous infinite updates to 2 initial renders.
