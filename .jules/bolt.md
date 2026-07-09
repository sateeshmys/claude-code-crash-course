## 2026-05-20 - HeroTerminal Render Optimization
**Learning:** High-frequency state updates like typing animations and cursor blinking in React components can cause massive redundant re-renders of large parent components. Isolating this state into a leaf component and using CSS animations for visual-only effects (like blinking) significantly improves performance.
**Action:** Always colocate visual animation state in the smallest possible component and prefer CSS keyframes over `setInterval` for simple periodic UI changes.
