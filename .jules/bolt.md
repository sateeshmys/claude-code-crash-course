# Bolt's Journal

## 2025-05-18 - Hero Terminal Typing & Blink Optimization

**Learning:** Continuous JS intervals (`setInterval` for cursor blinking and typing effects) placed in top-level layout/hero components cause continuous, high-frequency re-renders of the entire hero section (headlines, CTAs, stats). Replacing JS blink timers with pure CSS animations (`@keyframes blink` + `step-end`) and colocating typing animation state into an isolated child component (`TerminalMockup`) eliminates continuous re-renders and isolates typing updates to just the mockup element.

**Action:** Always replace visual intervals (blink/fade) with CSS keyframe animations and colocate typing/animation states into sub-components to keep parent components static.
