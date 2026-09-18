## 2026-09-18 - Isolated Terminal Mockup State & CSS Keyframe Blinking

**Learning:** Managing high-frequency UI updates (like typing animations and cursor blinking) at the page/section component level causes redundant re-renders of all static sibling elements (headers, CTAs, statistics grid). Replacing `useState` for visual blinking with pure CSS keyframes (`animate-blink`) completely eliminates JS timer ticks from React's lifecycle, and colocating typing animation state into a dedicated child component isolates re-renders exclusively to the terminal container.

**Action:** When implementing animated UI components (terminals, typed headers, loading indicators), always extract high-frequency state into isolated child components and prefer CSS keyframe animations over React state for repeating visual states like cursor blinks.
