## 2025-05-15 - [Isolated Terminal Renders]
**Learning:** High-frequency state updates (typing animations, blinking cursors) in a large parent component cause expensive re-renders of the entire subtree. Even if the UI looks simple, the React reconciliation and browser paint cycles for the whole hero section add up.
**Action:** Always isolate high-frequency visual state into the smallest possible memoized sub-component. Use pure CSS animations for recurring visual states like blinking to eliminate React state transitions entirely.
