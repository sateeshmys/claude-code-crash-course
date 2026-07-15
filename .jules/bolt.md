## 2025-05-15 - HeroTerminal Performance Optimization

**Learning:** Isolating high-frequency visual state (like typing animations) into a dedicated leaf component preventing re-renders of the entire Hero section. Additionally, replacing React-driven blinking cursors with CSS keyframe animations eliminates state updates entirely for that visual effect.

**Action:** Always check for high-frequency state updates in large components and use state colocation or CSS animations to keep the parent component stable.
