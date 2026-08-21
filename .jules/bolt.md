## 2025-05-15 - Isolating Animated Component State & CSS Keyframe Cursor

**Learning:** Visual state updates like terminal typing and cursor blinking inside a large parent layout component force frequent React re-renders of the entire subtree (badges, action buttons, stats grid, and background elements). Replacing JS-driven cursor blinking interval states with pure CSS `@keyframes` with `step-end` eliminates infinite re-renders post-animation. Colocating typing animation state inside a sub-component isolates typing re-renders exclusively to the terminal window.

**Action:** Whenever implementing typing effects or blinking cursors in hero components, use pure CSS keyframe animations for infinite visual loops and isolate component state into the specific sub-component that requires state updates.
