## 2026-08-30 - Hero Terminal Re-render Optimization & Pure CSS Cursor

**Learning:** Managing high-frequency visual states like typing animations and cursor blinking in a top-level hero component causes frequent, unnecessary re-renders of static elements (headlines, CTA buttons, matrix backgrounds, and stats). Furthermore, using `setInterval` for blinking cursor state (`setShowCursor(prev => !prev)`) causes endless re-renders every 530ms even after typing completes.

**Action:** Isolate animated typing state into a lightweight child component (`TerminalMockup`) so parent hero components remain purely static and unrendered after mount. Replace JS interval cursor state with a CSS `@keyframes blink` animation (`.animate-blink`) in `globals.css` to handle cursor blinking entirely on the GPU/compositor thread with zero React state updates.
