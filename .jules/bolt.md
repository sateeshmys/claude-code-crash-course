## 2026-05-15 - HeroTerminal Renders Optimized
**Learning:** High-frequency animations (like typing or cursor blinking) using React state in a large component cause the entire component tree to re-render, leading to significant performance overhead.
**Action:** Isolate high-frequency visual states into memoized sub-components and use CSS animations for regular patterns (like blinking) to eliminate unnecessary React render cycles.
