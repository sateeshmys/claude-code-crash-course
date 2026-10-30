## 2025-05-15 - HeroTerminal State Colocation and CSS Cursor Animation

**Learning:** High-frequency visual states in client components like blinking cursors (`setInterval` + `useState`) cause continuous, unnecessary React re-render cycles of the component and all unmemoized parent subtrees. Isolating typing animation state into a child sub-component (`TerminalMockup`) prevents parent section re-renders, while replacing JS state cursor toggles with a pure CSS keyframe (`animate-blink`) offloads visual animations entirely to the browser compositor thread.

**Action:** Whenever a component contains high-frequency animations or toggles (typing effects, cursors, blinking indicators), convert continuous visual toggles to CSS keyframes and isolate dynamic state into dedicated sub-components.
