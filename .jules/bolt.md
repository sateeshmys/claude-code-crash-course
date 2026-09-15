## 2025-05-18 - HeroTerminal Re-render Elimination via State Colocation and CSS Keyframe Cursor

**Learning:** Managing high-frequency UI animations (such as typing text or blinking terminal cursors) using React `useState` and `setInterval` at parent component level triggers continuous full-tree re-renders (~96 renders in 10s). Blinking cursors particularly waste CPU cycles when updated via state intervals since standard CSS step-end keyframes produce identical visual behavior with zero React render overhead.

**Action:** Isolate high-frequency typing state into dedicated sub-components (`TerminalMockup`), replace state-driven blinking cursor toggles with CSS `@keyframes blink` animations (`animate-blink`), and move constant strings outside component scope.
