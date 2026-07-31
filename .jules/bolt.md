# Bolt's Journal

## 2025-05-20 - [HeroTerminal High Frequency Blink Optimization]
**Learning:** Pure CSS blink animation is far more efficient than React `useState` blink animation because it removes re-renders. Additionally, colocation of typing animation state prevents the parent HeroTerminal component from re-rendering and cascading re-renders down.
**Action:** When working on blinking cursors or continuous animations, use Tailwind/CSS animations. Separate high-frequency state into a dedicated child component.
