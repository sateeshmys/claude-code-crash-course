## 2025-05-15 - [HeroTerminal Optimization]
**Learning:** High-frequency state changes (like typing animations or blinking cursors) in parent components trigger redundant re-renders of the entire component tree, including static text and complex layouts. Moving the cursor blink to a pure CSS animation and isolating the typing animation state into a focused sub-component (TerminalMockup) drastically reduces parent re-renders.

**Action:** In Next.js/React projects, always colocate high-frequency visual states in the smallest possible sub-component and prefer CSS keyframe animations over React state for periodic visual effects like blinking or pulsing.
