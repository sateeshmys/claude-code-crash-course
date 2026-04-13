## 2025-05-15 - [Optimization: Avoid React state for simple animations]
**Learning:** Using React state (e.g., `useState` + `setInterval`) for permanent simple animations like a blinking cursor causes continuous re-renders of the component. Even if the component is small, this consumes CPU cycles and increases main thread activity unnecessarily.
**Action:** Prefer CSS animations (`@keyframes`) for simple, permanent visual effects. It offloads the animation work to the browser's compositor thread and avoids React's reconciliation cycle.
