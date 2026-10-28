## 2025-05-18 - Hero Terminal Render Isolation and CSS Cursor Blink

**Learning:** Stateful timers inside top-level landing page components cause unnecessary re-renders across the entire Hero section. Replacing React `useState` timer for blinking cursor with pure CSS animation (`.animate-blink`) completely eliminates continuous re-renders. Further isolations by extracting typing animations into a child component (`TerminalMockup`) reduces parent `HeroTerminal` re-renders from ~98 to 2 in a 10s window.

**Action:** Always check high-frequency visual updates (blinking cursors, pulsing dots) and prefer pure CSS keyframes over React state timer intervals. Colocate internal component state into sub-components.
