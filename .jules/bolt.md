# Bolt Performance Journal

## 2025-05-15 - React Render Optimization in HookHub HeroTerminal
**Learning:** High-frequency visual states like terminal typing animations and cursor blinking in React trigger massive amounts of full-component re-renders (98+ within 10 seconds) if they are placed in root components. This causes visual lag, blocks the main thread, and degrades UX. Isolating high-frequency state into separate sub-components (state colocation) and using pure CSS transitions/animations (like `@keyframes blink`) reduces re-renders to only initial mount/hydration (2 renders).
**Action:** Move high-frequency timers and cursor visual states into isolated sub-components. Replace React state cursor blinking with CSS `animate-blink`. Always define static constants outside the React component to avoid redundant recreation.
