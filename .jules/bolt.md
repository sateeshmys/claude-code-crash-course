## 2026-09-30 - HeroTerminal Re-render Elimination via State Colocation and CSS Blink

**Learning:** Managing high-frequency visual states (like terminal cursor blinking at 530ms and typing animations at 100ms) at the Hero component level causes frequent re-renders of the entire top-level component tree (~90 re-renders in an 8s window), re-evaluating static DOM subtrees, buttons, icons, and layout structures unnecessarily.

**Action:** Colocate typing animation state into a dedicated sub-component (`TerminalMockup`) and replace state-driven cursor blinking (`useState` with `setInterval`) with pure CSS keyframe animations (`.animate-blink`).
