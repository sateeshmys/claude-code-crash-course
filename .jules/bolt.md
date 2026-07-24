# Bolt's Journal - Critical Learnings

## 2025-07-24 - HeroTerminal render isolation & Cursor Optimization
**Learning:** Re-renders in React Client Components can be high-frequency and extremely inefficient if visual states like typing effects and blinking cursors are managed via frequent `useState` updates in a large component. Isolating these states to smaller sub-components (colocation) and replacing CSS-equivalent animations (like blink) with CSS keyframes dramatically reduces parent re-renders and improves performance.
**Action:** Move high-frequency typing/blinking logic into a focused sub-component or pure CSS animations, ensuring no parent state is modified. Clear any setTimeout/setInterval handlers on unmount to avoid memory leaks.
