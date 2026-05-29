## 2026-05-20 - [Isolating high-frequency state updates in HeroTerminal]
**Learning:** In HookHub, the `HeroTerminal` component was re-rendering its entire complex structure (SVG background, static text, layout) every 100ms due to a typing animation state and every 530ms due to a cursor blink state. This is a common performance bottleneck in interactive hero sections.
**Action:** Isolate high-frequency state updates into memoized sub-components and leverage CSS animations for simple UI toggles (like cursor blinking) to minimize React's reconciliation work on the main thread.
