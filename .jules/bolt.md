## 2026-08-17 - Isolating terminal typing state in HeroTerminal
**Learning:** High-frequency timer intervals (e.g., 530ms cursor blink or 100ms typing effects) cause continuous re-renders of the entire parent layout if left at top-level component scope. Moving cursor blinking to pure CSS keyframe animations (`animate-blink`) and state to a sub-component isolates re-renders away from static headings and CTAs.
**Action:** When encountering typing or cursor animations in hero components, colocate typing state into a sub-component and use CSS keyframe animations for cursor blinks.
