## 2025-05-15 - State Colocation and CSS Keyframe Animations for High-Frequency Terminal Components

**Learning:** Managing high-frequency UI updates (like typing animations or blinking cursors) at the top-level of a hero section component causes repeated re-renders of all static sibling JSX elements (headlines, CTA buttons, metrics). Additionally, using React `useState` + `setInterval` for simple visual toggles like cursor blinking triggers ~2 re-renders per second indefinitely.

**Action:** Isolate high-frequency visual states into dedicated sub-components (`TerminalMockup`) and replace state-driven visual toggles with CSS keyframe animations (`.animate-blink`). This reduces parent component re-renders from over 98 down to initial mount only.
