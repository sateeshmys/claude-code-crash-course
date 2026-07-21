## 2025-05-15 - [Initial Entry]
**Learning:** React.memo and state colocation are extremely useful in HookHub to eliminate high-frequency typing/cursor re-renders in Hero components. We can also optimize performance by offloading cursor blinking to pure CSS animations (`animate-blink` using `@keyframes blink` with `step-end`) in `globals.css` instead of React `useState` / `setInterval` render cycles.
**Action:** Isolate high-frequency visual states into a separate sub-component or offload visual animations (like cursor blink) to pure CSS styles. Prevent parent component re-renders completely.
