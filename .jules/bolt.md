## 2026-03-30 - Terminal Cursor & Typing Animation State Colocation

**Learning:** High-frequency timer state in hero components (e.g., terminal typing animations and cursor blinking) triggers unnecessary parent re-renders when defined at the root component level. A 530ms cursor blink `setInterval` alone causes continuous main-thread state updates and DOM diffing even when the terminal content is static.

**Action:**
1. Replace JavaScript cursor blink state (`useState` + `setInterval`) with a pure CSS keyframe animation (`animate-blink` using `step-end`).
2. Isolate high-frequency typing state into a dedicated sub-component (`TerminalMockup`) so state updates remain local to the terminal window and do not cause re-renders of surrounding marketing UI, badges, CTA buttons, and stats.
3. Store timeout references inside `useEffect` and ensure proper cleanup on unmount.
