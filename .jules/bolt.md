## 2025-05-18 - HeroTerminal Re-render Optimization

**Learning:** Managing high-frequency UI updates (like cursor blinking and character-by-character typing animations) at the top-level hero section component causes unnecessary re-renders of static hero elements (headings, badges, CTAs, stats). Moving cursor blinking to pure CSS animations (`animate-blink`) and colocating typing animation state inside a sub-component (`TerminalMockup`) eliminates parent re-renders completely.

**Action:** Whenever implementing animated terminal or typing mocks in React components, use CSS keyframes for blinking elements and isolate state to dedicated child components so that parent layouts remain completely static during animations.
