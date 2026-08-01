# Bolt Journal - HookHub Performance Optimization

## 2025-05-15 - [Initial Profiling and Hero Terminal Render Bottleneck]
**Learning:** React re-renders in dynamic UI components can be significantly reduced by isolating local animated/changing state from static parent structural layouts. The `HeroTerminal` component has high-frequency typing state that triggers re-renders across the entire section.
**Action:** Isolate the typing animation and the blinking cursor logic into a specialized, memoized or state-isolated sub-component `TerminalMockup`, and replace React-managed cursor-blinking states with CSS animations to keep render cycles at a minimum.
