# Bolt Journal - Performance Insights

## 2025-05-20 - Terminal Cursor and State Colocation Optimization
**Learning:** High-frequency state updates driven by `setInterval` in a parent component re-render all static sibling UI (headings, stats, buttons). Moving cursor blinking to pure CSS (`@keyframes blink`) eliminates endless timer state updates completely, and colocating typing animation state into a dedicated child component isolates terminal re-renders from the parent hero layout.
**Action:** Always replace visual periodic state changes with CSS animations and colocate high-frequency animation state into isolated leaf components.
