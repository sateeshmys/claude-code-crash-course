# Bolt's Journal - Performance Learnings

## 2025-05-15 - [Anti-pattern: State-based Cursor Blinking]
**Learning:** Using `useState` and `setInterval` to toggle a cursor's visibility causes the entire component (and its children) to re-render on every blink. For a permanent UI element like a terminal cursor, this is a significant waste of main thread resources.
**Action:** Use CSS `@keyframes` animations for permanent visual effects like blinking cursors to offload the work from the React render cycle and the main thread.

## 2025-05-15 - [Anti-pattern: High-frequency state in large components]
**Learning:** Placing high-frequency animation state (like a typing effect) in a large component causes the entire sub-tree to re-render, even if most of it is static content (headlines, descriptions, etc.).
**Action:** Isolate high-frequency state into the smallest possible sub-components. This ensures that only the relevant part of the DOM is updated, keeping the rest of the component tree stable.
