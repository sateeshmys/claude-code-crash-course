
## 2025-05-15 - [Squared Distance Optimization in Animation Loops]
**Learning:** In high-frequency animation loops (like canvas particles), using `Math.sqrt` for distance checks is a common bottleneck. Replacing it with squared distance comparison (`dx*dx + dy*dy < max*max`) avoids the expensive square root operation for the majority of particle pairs.
**Action:** Always prefer squared distance comparisons for threshold checks in O(n^2) loops.

## 2025-05-15 - [Static Data Filtering Outside React Components]
**Learning:** Filtering static JSON data inside a component body causes the filter to run on every render/re-render, even if the data never changes.
**Action:** Move static data transformations outside the component definition or use `useMemo` to ensure they only run once.
