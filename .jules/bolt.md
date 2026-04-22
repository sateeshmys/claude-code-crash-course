# Bolt's Performance Journal

## 2025-04-22 - [Isolating High-Frequency State]
**Learning:** High-frequency state updates (like typing animations or cursors) in a complex parent component cause the entire tree to re-render. Moving these to specialized sub-components or using CSS animations significantly reduces reconciliation cost.
**Action:** Always check if a frequently changing state can be moved into a smaller component or replaced by pure CSS.
