## 2026-06-19 - HeroTerminal and HeroParticles Performance Isolation

**Learning:** High-frequency state updates (100ms typing, 530ms cursor blinking) in a large Client Component like `HeroTerminal` trigger full re-renders of the entire component tree, including static layout and complex SVGs. Additionally, $O(N^2)$ loops in animation frames (like in `HeroParticles`) are expensive due to repeated `Math.sqrt()` calls.

**Action:** Isolate high-frequency visual states into memoized sub-components and leverage pure CSS animations (e.g., `steps(1)` for blinking) to eliminate React render cycles. Use squared distance comparisons in particle collision/connection logic to avoid unnecessary square root calculations.
