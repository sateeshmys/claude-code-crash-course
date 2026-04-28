## 2025-05-22 - [Isolate High-Frequency State Updates]
**Learning:** High-frequency state updates, such as those used for typing effects or cursor blinking, can cause the entire parent component to re-render. In complex sections like Hero components, this leads to significant main thread activity and potential performance bottlenecks.
**Action:** Isolate such high-frequency animations into small, memoized sub-components. Additionally, prefer CSS animations over React state for permanent visual effects like blinking cursors to further reduce JS execution overhead.
