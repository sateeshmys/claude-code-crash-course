## 2026-05-15 - Isolating high-frequency visual states in Next.js Client Components
**Learning:** Top-level state updates in complex Client Components (like typing animations or cursors) trigger full re-renders of the component and all its non-memoized children. For complex UIs with SVGs or multiple sections, this causes significant performance overhead and battery drain.
**Action:** Move high-frequency state updates into specialized, memoized sub-components and leverage pure CSS animations (e.g., for blinking cursors) to eliminate React render cycles entirely for purely visual transitions.
