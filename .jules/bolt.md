## 2025-05-18 - HeroTerminal Render Optimization via State Colocation and CSS Animations

**Learning:** Managing high-frequency UI state (like terminal typing animations or blinking cursor timers) at the top-level section component causes continuous full-component re-renders of static hero layouts (headings, badges, CTAs, and background patterns). Blinking state in React (`useState` toggled via `setInterval`) re-renders the component continuously even after typing finishes.

**Action:** Isolate high-frequency visual states into dedicated sub-components (`TerminalMockup`) so typing updates only re-render the terminal container. Replace timer-driven UI states like blinking cursors with CSS keyframe animations (`.animate-blink` using `step-end`) to move the work entirely to the browser rendering pipeline and avoid JavaScript re-renders.
