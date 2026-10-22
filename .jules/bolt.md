# Bolt Journal - Critical Learnings

## 2025-05-18 - Hero Terminal Render Isolation and CSS Blink Animation
**Learning:** High-frequency state updates (such as character-by-character terminal typing and 530ms cursor blinking) cause full parent layout re-renders if left in the main component scope. Converting cursor state to CSS animation (`.animate-blink`) and colocating typing animation state into a `TerminalMockup` sub-component reduces parent component re-renders from ~98 to 2 in a 10s window.
**Action:** Always isolate high-frequency UI animation states into leaf sub-components or CSS keyframe animations to keep parent layout components pure and prevent layout tree re-renders.
