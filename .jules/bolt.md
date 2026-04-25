## 2025-05-15 - [Hero Animation Optimization]
**Learning:** High-frequency state updates (like cursor blinking) in a large parent component cause unnecessary re-renders of the entire subtree. Using CSS animations for permanent visual effects and isolating high-frequency React state into sub-components significantly reduces main thread activity and reconciliation overhead.
**Action:** Always prefer CSS animations for simple, permanent visual effects. When React state is necessary for animations (e.g., typing effects), isolate it in a specialized sub-component to prevent parent tree re-renders.
