## 2025-05-18 - Hero Terminal Re-render Optimization via State Colocation and CSS Animations

**Learning:** High-frequency timer-driven animations in React components (such as typing mockups or cursor blinking) cause full sub-tree re-renders when state is placed at the top component level. Converting stateful cursor blinking to pure CSS animations (`@keyframes blink`) eliminates continuous state mutations, while state colocation into a dedicated sub-component isolates typing updates from non-dynamic layout elements (e.g., CTA buttons, headings, stat cards).

**Action:** Whenever implementing animated terminal mockups or typing previews, isolate dynamic string states inside a child sub-component and replace visual state toggles (like cursor opacity) with CSS keyframe animations.
