# Bolt's Journal

## 2025-05-15 - State isolation and CSS animations for HeroTerminal
**Learning:** High-frequency layout animations (like cursor blinking and text typing) driven by React state triggers complete component re-renders. When these occur in a large component (like a page or complex section hero), the entire tree re-renders every 100ms or 530ms, wasting CPU cycles and causing performance degradation.
**Action:** Isolate high-frequency visual states into a dedicated sub-component (`TerminalMockup`) and replace React state cursor blinking with GPU-accelerated CSS keyframe animations (`animate-blink`). Ensure any asynchronous operations (like delayed terminal output via `setTimeout`) are properly cancelled on unmount using references declared at the outer `useEffect` scope.
