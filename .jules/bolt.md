## 2025-05-15 - CSS Blink Animation vs React State Timer
**Learning:** Using `useState` and `setInterval` to toggle visual elements like terminal blinking cursors forces React to re-render the component twice per second indefinitely, causing unnecessary main-thread work and DOM reconciliations.
**Action:** Replace visual toggling timers with pure CSS keyframe animations (`step-end` or `@keyframes opacity`) to keep visual animations off the React rendering pipeline.
