## 2025-05-20 - Pure CSS Keyframes vs React State for High-Frequency Visual Elements

**Learning:** Managing high-frequency visual toggles (like terminal cursor blinking every 530ms) with React `useState` causes constant component re-renders that run indefinitely for as long as the page is open.
**Action:** Replace state-based toggles for purely visual continuous animations with pure CSS keyframes (`step-end` timing function) to offload animation rendering to the GPU/browser compositor and prevent React component re-renders completely.
