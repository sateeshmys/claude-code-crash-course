## 2025-04-21 - [Optimize Hero Terminal Renders]
**Learning:** Moving high-frequency animation state (typing effect) into a leaf component and using CSS animations for blinking cursors eliminates dozens of unnecessary re-renders in complex parent sections like Hero components.
**Action:** Always isolate high-frequency state into specialized sub-components and prefer CSS for permanent visual effects.
