# Bolt Journal

## 2025-07-19 - Terminal Cursor Animation Optimization
**Learning:** High-frequency visual states like a blinking cursor in a React terminal component can trigger an excessive number of renders (e.g. dozens of renders in a few seconds) if managed via React's `useState` and `setInterval`. Moving the blinking behavior to a pure CSS keyframe animation (`animate-blink`) completely eliminates these React state updates and reduces renders significantly.
**Action:** Use CSS animations with step-end or other easing for high-frequency blinking UI states instead of React `useState` timers.
