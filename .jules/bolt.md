# Bolt's Journal

## 2025-05-20 - High-Frequency State Isolation in HeroTerminal
**Learning:** In HeroTerminal.tsx, typing animations update state every 100ms, and blinking cursor updates state every 530ms. Keeping these in the parent component causes the entire hero section (badge, text, CTA buttons, stats, background grid) to re-render.
**Action:** Replace the cursor state with CSS animation (`animate-blink`) and isolate typing animation to a specialized client sub-component (`TerminalMockup`), keeping parent renders at exactly 1 or 2 (hydration and mount).
