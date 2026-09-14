## 2025-05-20 - Terminal Cursor & Typing State Colocation Optimization

**Learning:** High-frequency visual state changes (such as terminal cursor blinking on a 530ms timer) driven by React `useState` cause perpetual re-renders of parent layout components unless state is isolated or replaced by pure CSS animations (`animate-blink`).

**Action:** Replace `useState` cursor blinking timers with CSS keyframe step animations, and isolate typing state into sub-components so parent components render only once on mount.
