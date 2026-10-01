# Bolt's Journal - Critical Learnings

## 2025-05-18 - Hero Terminal Re-render Optimization & State Colocation
**Learning:** React components with high-frequency timers (e.g. 100ms typing animations or 530ms cursor blink intervals) cause frequent re-renders of the entire component tree if state is kept at top level. Replacing cursor state toggles with CSS `@keyframes` (`step-end`) and collocating high-frequency typing state into dedicated sub-components completely eliminates parent component re-renders.
**Action:** When creating animated visual components, use CSS animations for recurring UI blinks and collocate state to isolate render boundaries.
