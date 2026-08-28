## 2025-05-18 - CSS Keyframes vs React State for Visual Terminal Animations

**Learning:** Managing high-frequency visual UI state like a terminal cursor blink using React `useState` and `setInterval` causes continuous, unnecessary component re-renders (at ~530ms intervals indefinitely). Replacing state-driven toggling with a pure CSS keyframe animation (`@keyframes blink` with `step-end`) achieves identical visual behavior while reducing ongoing component re-renders to zero after initial load.

**Action:** Always check hero components or interactive mockups for state-based timers driving purely visual animations, and replace them with CSS utility classes or keyframe animations.
