## 2026-05-15 - State Isolation for High-Frequency Animations
**Learning:** High-frequency visual states like terminal typing and cursor blinking in React components can cause unnecessary re-renders of large parent components if not properly isolated. Using CSS keyframe animations for simple periodic states (like cursor blinking) and colocating dynamic state into smaller memoized sub-components can reduce parent re-renders to zero.
**Action:** Always profile components with frequent state updates using a headless browser script to measure re-render counts, and prioritize moving that state into the smallest possible component or using pure CSS where possible.

## 2026-05-15 - Managing Scope and 'Bootstrapping' Warnings
**Learning:** Checking out a project from a remote branch that doesn't exist in the local HEAD can lead to 'bootstrapping' warnings if the entire directory is staged. Additionally, including unused component variants or agent orchestration files (like `.claude/` or `memory/`) bloats the PR and can lead to rejection.
**Action:** After checking out a remote project, unstage everything and only `git add` the specifically optimized files. Remove extraneous files and unused variants before submitting to keep the diff focused on the performance win.
