## 2025-05-20 - HeroTerminal Re-render Optimization
**Learning:** High-frequency visual animations (typing effect + blinking cursor) in root component files like `HeroTerminal.tsx` cause wasteful parent re-renders when state is not colocated or when pure CSS keyframes aren't used.
**Action:** Isolate animated typing state into dedicated sub-components and replace JS interval-driven DOM toggles (e.g. blinking cursor) with CSS keyframe animations (`animate-blink`).
