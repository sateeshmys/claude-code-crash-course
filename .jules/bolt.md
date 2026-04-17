## 2025-05-22 - [Optimized HeroTerminal Animation Performance]
**Learning:** High-frequency animations driven by React state (like typing effects or blinking cursors) cause expensive re-renders of the entire parent component tree, including static layout and background patterns. Using CSS animations for purely visual effects (blinking) and isolating high-frequency state into specialized sub-components (typing) prevents redundant processing of the main layout.
**Action:** Always isolate high-frequency state into the smallest possible sub-component and prefer CSS `@keyframes` over `setInterval` + `useState` for simple periodic animations to move work to the compositor thread.

**Performance Impact:**
- **Idle state:** Reduces re-renders of the Hero section from ~1.9/sec (every 530ms) to 0.
- **Typing state:** Isolates character-by-character re-renders to a small sub-component, preventing the complex Matrix-style background and layout from being recalculated 10 times per second.
