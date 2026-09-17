# Bolt Journal - HookHub

## 2025-05-18 - Hero Terminal Render Optimization
**Learning:** High-frequency timer state updates in `HeroTerminal` (100ms typing interval and 530ms cursor blink interval) caused complete parent component re-renders including static headers, CTAs, and stats. Isolating high-frequency state into a sub-component (`TerminalMockup`) and replacing `useState` blinking cursor with pure CSS animation (`@keyframes blink` / `.animate-blink`) reduced component re-renders from ~98 down to just 2 on initial mount/hydration.
**Action:** When working with animated UI mockups or terminals in Next.js/React Client Components, isolate typing state to child components and prefer CSS keyframes over `setInterval` + `useState` for cursor blinking.
