# Bolt's Journal

## 2025-08-09 - High frequency visual updates optimization in Next.js/React Hero Section
**Learning:** High-frequency layout updates and animation state loops (like blinking terminal cursor `setInterval` or continuous typing updates) running in high-level components trigger parent re-rendering. Even if the state is local, if it lives inside a top-level component, everything within that component and its children is repeatedly re-evaluated. Pure CSS animations eliminate JS-driven loop overhead, and state colocation isolates unavoidable state updates from static visual wrappers.
**Action:** Move typing/cursor states into a isolated sub-component (state colocation). Replace JS intervals for blinking cursors with static pure CSS animation with `step-end`.
