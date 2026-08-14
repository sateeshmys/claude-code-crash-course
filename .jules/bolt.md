## 2025-08-14 - Hero Terminal Re-render Optimization

**Learning:** Managing high-frequency visual states (such as terminal cursor blinking at ~500ms intervals or character-by-character typing animations) at the top-level hero component causes continuous re-renders of all static hero DOM elements (headlines, CTAs, background graphics, stats counters). Replaying stateful blinks via JavaScript intervals is inefficient compared to CSS keyframe animations (`step-end`). Additionally, colocating high-frequency typing animation state into a sub-component isolates state updates and eliminates parent re-renders completely.

**Action:** Replace JavaScript-driven cursor blink state toggles with CSS keyframes (`animate-blink`). Colocate dynamic terminal state into dedicated leaf sub-components to keep parent components purely static.
