## 2026-05-21 - Isolated State for High-Frequency Renders
**Learning:** High-frequency visual state (like typing animations or blinking cursors) in a large component causes the entire component and its subtree to re-render unnecessarily. React state for something as simple as a blink is an anti-pattern when CSS animations can achieve the same result with zero React overhead.
**Action:** Always isolate high-frequency state into the smallest possible child component (colocation) and prefer pure CSS animations for repetitive visual effects like blinking or pulsing.

## 2026-05-21 - PR Scope and Bootstrapping Warnings
**Learning:** When working on a codebase that is checked out from a remote branch and not yet in the local branch's history, staging the entire directory is interpreted as "bootstrapping" a new application. Security/architectural reviewers also flag orchestration files like `.claude/` or `memory/`.
**Action:** Use `git restore --staged` to unstage everything after a checkout, then only `git add` the specific files modified for the optimization. Ensure all temporary logs and orchestration folders are deleted before staging.
