## 2025-05-18 - HeroTerminal State Colocation and CSS Cursor Blink Optimization

**Learning:** Managing high-frequency UI state (like typing animations every 100ms or blinking cursors every 530ms) at the top component level forces the entire component tree—including heavy static layout elements—to re-render on every frame. Replacing JS-driven cursor state (`setInterval`) with a pure CSS keyframe animation (`animate-blink`) and colocating typing animation state into a focused sub-component (`TerminalMockup`) eliminates parent re-renders completely.

**Action:** Whenever a component contains both high-frequency dynamic visual state and static content/layout, isolate the dynamic state in a memoized sub-component or colocate state locally, and offload recurring visual toggles (like cursor blinks or spinners) to pure CSS animations.
