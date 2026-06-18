## 2026-05-20 - Isolating high-frequency state in Client Components

**Learning:** High-frequency state updates (e.g., 100ms typing intervals) in a large Client Component can trigger expensive full-tree re-renders, even if the actual visual change is localized. While React is efficient, the overhead of diffing a large SVG-heavy component 10 times per second is significant. Isolating this state into a memoized sub-component reduces the parent's re-render count from N (chars typed) to 2 (initial and completion).

**Action:** Always look for high-frequency `useState` or `useEffect` patterns and consider moving them into dedicated sub-components. Combine this with CSS animations for simple periodic visual states like blinking cursors to eliminate React state updates entirely for those elements.

## 2026-05-20 - Managing PR diff size with project branches

**Learning:** When checking out a project branch that contains an entire application, staging the whole directory can result in a massive diff that obscures the actual optimization. This triggers "bootstrapping" or "overhaul" warnings from automated reviewers.

**Action:** After checking out a project branch, immediately unstage everything (`git restore --staged .`) and then only `git add` the specific files that contain the performance optimization. This keeps the PR focused and manageable.
