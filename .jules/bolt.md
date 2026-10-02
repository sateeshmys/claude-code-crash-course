## 2026-10-02 - Replaced React useState Terminal Cursor Blink with Pure CSS Keyframe Animation

**Learning:** Managing high-frequency visual states like a terminal cursor blink using React `useState` and `setInterval` triggers unnecessary re-renders every 530ms. Moving this animation logic entirely into a pure CSS keyframe animation (`animate-blink`) avoids JS thread activity and React component re-renders completely.

**Action:** Prefer CSS animations (`@keyframes`) over React state-driven intervals for purely visual, periodic UI state transitions.
