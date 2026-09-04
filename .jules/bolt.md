## 2025-05-18 - Isolated React State and CSS Animation for Blinking Cursor

**Learning:** Continuous JS `setInterval` state updates for visual UI effects (like a 530ms blinking terminal cursor) cause high-frequency re-renders across parent component trees. In Next.js client components, combining high-frequency typing state with visual blinks in the parent component causes the entire hero section (including static stats and headlines) to re-render continuously every 100ms-530ms.

**Action:** Replace visual blinking state in React (`useState` toggled via `setInterval`) with CSS keyframe animations (`step-end` iteration). Colocate remaining streaming or typing state into isolated sub-components so parent layout components remain completely static after mount.
