# Bolt Journal - Critical Learnings

## 2025-05-15 - HeroTerminal Re-render Optimization & Pure CSS Cursor Animation
**Learning:** High-frequency timer intervals in hero components (such as typing text effects and cursor toggling every ~530ms) cause full re-renders of parent components including heavy layout, headlines, CTAs, and stats sections if state is held at the parent root level. Replacing JS-driven cursor state (`useState` + `setInterval`) with pure CSS keyframe animations (`@keyframes blink`) and colocating typing animation state into a dedicated child component (`TerminalMockup`) prevents parent re-renders completely during terminal typing cycles.
**Action:** Always isolate animated or interactive UI widgets into sub-components and favor CSS keyframe animations over React `useState` timer toggles for visual-only recurring effects.
