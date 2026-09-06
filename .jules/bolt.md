## 2025-03-06 - HeroTerminal Re-render Optimization & CSS Cursor Blinking

**Learning:** High-frequency visual state updates (such as terminal typing animations occurring every 100ms and cursor toggling every 530ms) cause full component re-renders if maintained in the parent hero component state. Moving blinking logic to a pure CSS keyframe animation (`animate-blink` with `step-end`) completely eliminates interval timer re-renders, while colocating typing state inside an isolated sub-component (`TerminalMockup`) prevents parent CTA and layout components from re-rendering during state changes.

**Action:** Always isolate high-frequency animated state into dedicated sub-components and replace React state intervals with CSS animations for continuous visual effects like cursor blinking or pulses.
