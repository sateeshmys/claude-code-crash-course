## 2025-05-18 - Isolate High-Frequency Terminal Animation State

**Learning:** Component state driving high-frequency timers (such as command typing or blinking cursors in Hero components) causes re-renders across the entire component tree, re-evaluating static subtrees (headlines, CTAs, grid patterns). In addition, using JS `setInterval` for blinking visual state causes unnecessary React state transitions.

**Action:** Colocate high-frequency typing state into an isolated sub-component (`TerminalMockup`) and replace JS cursor timers with pure CSS keyframe animations (`animate-blink` with `step-end`).
