## 2025-05-18 - Replacing React cursor blink state with CSS animation & isolating Hero state

**Learning:** Managing high-frequency visual states like a blinking cursor (`setInterval` toggling `useState` every 530ms) causes continuous re-renders of the entire component tree. Replacing this with a CSS `@keyframes` step animation removes JS timers completely. Furthermore, state colocation (extracting stateful typing logic into a isolated sub-component `TerminalMockup`) isolates typing animation re-renders from the main static `HeroTerminal` layout.

**Action:** Always inspect component animations for `useState` + `setInterval` patterns. Use CSS keyframe animations for simple periodic visual toggles, and extract stateful sub-trees into child components to prevent top-level component re-renders.
