## 2026-06-11 - HeroTerminal Rendering Optimization
**Learning:** High-frequency state updates (100ms typing interval) in a parent component caused unnecessary re-renders of the entire Hero section, even though only a small part of the UI changed. Moving the state into a memoized sub-component and replacing React-managed intervals with CSS animations significantly improves performance.
**Action:** Always isolate high-frequency state (like animations, timers, or form inputs) into specialized sub-components. Prefer CSS animations over React state intervals for visual-only updates like cursors.
