## 2025-05-18 - HeroTerminal state colocation & CSS keyframe animation
**Learning:** High-frequency timer-based visual updates like blinking terminal cursors cause excessive parent re-renders when kept in React state.
**Action:** Replace cursor `useState`/`setInterval` with CSS `@keyframes blink` animation class and isolate remaining typing state inside sub-components via state colocation.
