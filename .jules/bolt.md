## 2025-05-15 - Isolating Terminal Typing State and Replacing JS Blinking Cursor with CSS

**Learning:** Stateful cursor blinking (`setInterval` toggling `useState` every 530ms) in React client components causes continuous re-renders of the entire parent layout and surrounding UI indefinitely. Additionally, typing animation state inside top-level hero components re-renders static hero elements on every character typed. Replacing JS cursor state with pure CSS `@keyframes` and state colocation into a dedicated sub-component (`TerminalMockup`) reduces parent re-renders to 0 post-hydration.

**Action:** Whenever implementing typing or cursor blinking effects, always use CSS `@keyframes` (`step-end` iteration) for the blinking cursor and colocate stateful animation variables into a dedicated sub-component.
