## 2026-05-20 - HeroTerminal Re-render Optimization
**Learning:** High-frequency state updates (like 100ms typing intervals) at the top level of a component cause the entire component tree to re-render, including complex static SVGs and layout elements.
**Action:** Isolate high-frequency state into memoized sub-components and leverage CSS animations (like `cursor-blink`) to replace React-managed state intervals where possible.
