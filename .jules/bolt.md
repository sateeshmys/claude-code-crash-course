## 2026-05-25 - [Hero Terminal Performance Bottleneck]
**Learning:** The 'HeroTerminal' component in HookHub was a significant bottleneck due to top-level state updates (every 100ms for typing, 530ms for cursor) triggering full re-renders of complex SVG and static content.
**Action:** Isolate high-frequency state into memoized sub-components and use CSS animations for visual effects to reduce React reconciliations.
