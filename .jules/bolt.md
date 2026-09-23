## 2026-09-23 - CSS Keyframe Animation & State Isolation for Terminal Typing

**Learning:** Managing high-frequency animations (like blinking terminal cursors) with React `useState` and `setInterval` triggers unnecessary component re-renders every cycle (2 re-renders/sec indefinitely). Moving visual states to CSS keyframe animations (`@keyframes blink`) eliminates continuous main-thread JS execution. Furthermore, isolating typing state into a child component (`TerminalMockup`) prevents parent section re-renders during text typing.

**Action:** Prefer CSS animations for continuous visual feedback loop elements and isolate fast-updating typing/animation state into child sub-components.
