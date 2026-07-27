# Bolt's Performance Journal

## 2026-07-27 - [Component State Isolation & Async Timeout Cleanup]
**Learning:** Isolating high-frequency render states (like character-by-character typing animations) into separate client components significantly reduces parent component re-renders. However, when utilizing dynamic timeouts/intervals to trigger subsequent UI stages (like showing terminal command outputs after typing), returning a cleanup function inside the callback of an asynchronous `setInterval` is an anti-pattern as the callback return value is ignored by the event loop. This leads to dangling timeouts attempting state updates on unmounted components and memory leaks.
**Action:** Always store timeout references (`NodeJS.Timeout`) in a module/effect-scoped variable and clear them explicitly inside the main `useEffect` unmount cleanup function.
