## 2026-05-20 - High-frequency visual states in Next.js 15
**Learning:** High-frequency visual states like a blinking terminal cursor or typing animations should use pure CSS animations or isolated sub-components to eliminate unnecessary render cycles in the parent component. In Next.js 15 Client Components, frequency of re-renders can significantly impact browser responsiveness if not contained.
**Action:** Always isolate state-heavy visual logic into specialized sub-components or leverage CSS keyframes for animations like cursors to keep parent components lean and stable.
