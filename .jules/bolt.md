## 2026-05-21 - HeroTerminal Rendering Optimization
**Learning:** High-frequency visual states like terminal typing animations and cursor blinking can trigger hundreds of unnecessary re-renders across a large component tree if not isolated. In this case, the blinking cursor alone triggered 19 re-renders every 10 seconds, while typing triggered dozens more.
**Action:** Isolate high-frequency state into small, memoized sub-components and replace state-driven visual effects (like blinking) with pure CSS keyframe animations to eliminate React render cycles entirely for those effects.
