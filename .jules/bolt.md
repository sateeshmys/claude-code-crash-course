## 2025-05-15 - HeroTerminal Performance Isolation

**Learning:** High-frequency state updates (100ms typing, 530ms cursor) in a top-level component like `HeroTerminal` trigger expensive re-renders of the entire component tree, including static text, buttons, and background patterns. This causes unnecessary main-thread activity and can lead to jank.

**Action:** Isolate high-frequency state into memoized sub-components (e.g., `TerminalBody`) and replace simple visual state (like a blinking cursor) with CSS animations (@keyframes) to minimize React re-renders.
