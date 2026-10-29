## 2025-02-15 - Colocate High-Frequency Animation State in Hero Terminal

**Learning:** Component-level state updates like typing simulations (`setInterval` every 100ms) or blinking cursor toggles (`setInterval` every 530ms) cause full component re-renders of large parent components containing static content (headlines, navigation, buttons, background patterns). Re-renders driven by blinking cursor state continue indefinitely even after user interaction stops.
**Action:** Replace state-driven cursor toggling with pure CSS animations (`@keyframes blink`) in `globals.css` and colocate high-frequency typing animation state into a dedicated child component (`TerminalMockup`) to preserve zero re-renders on the static parent tree.
