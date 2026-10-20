## 2025-05-20 - HeroTerminal state colocation and CSS blink animation
**Learning:** High-frequency timer state (530ms cursor blink interval + 100ms typing interval) in top-level hero components causes excessive re-renders (~98 re-renders in 10s) across static marketing UI elements.
**Action:** Extract typing animation state into an isolated sub-component (`TerminalMockup`) and replace JS-driven cursor blinking with CSS keyframe animation (`animate-blink`).
