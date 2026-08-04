# Bolt's Performance Journal ⚡

## 2025-08-04 - Preventing HeroTerminal High-Frequency Render Cycles
**Learning:** High-frequency visual state changes such as text typing animations and cursor blinking can trigger extremely frequent React re-renders across large parent components. Isolating the dynamic visual state into a self-contained sub-component prevents the parent components and their heavy DOM structures from re-rendering. Furthermore, replacing React state-driven blinking with pure CSS keyframe animations eliminates state updates altogether for the cursor.
**Action:** Always colocate typing/blinking animation state within its own specialized UI sub-component, and use pure CSS `@keyframes` with `step-end` for standard timing blink visual effects instead of React timer-driven states.
