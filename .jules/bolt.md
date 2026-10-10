## 2025-05-18 - Isolate High-Frequency Typing State & CSS Terminal Cursor

**Learning:** Combining high-frequency character typing state (`useState` every 100ms) and blinking cursor state (`useState` every 530ms) directly within a component that renders large static subtrees (such as hero headlines, CTA buttons, matrix backgrounds, and stats cards) causes unnecessary re-renders of the outer subtree every 100-530ms.

**Action:** Isolate high-frequency typing animation state into a dedicated child component (`TerminalMockup`) and replace JS interval cursor toggles with a pure CSS `@keyframes blink` animation (`step-end`). This reduces parent component re-renders from ~98 down to 2 on initial load.
