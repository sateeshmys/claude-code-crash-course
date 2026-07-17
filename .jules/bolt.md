# Bolt's Journal - HookHub Performance Optimization

## 2025-07-17 - Blinking Cursor React State Rendering Bottleneck
**Learning:** React `useState` triggers complete component re-renders for every state transition. Running an infinite interval (like a 530ms cursor blink state) inside a large Hero component causes the entire tree (headline, stats, badges, and background) to continuously re-render. State colocation and offloading high-frequency UI changes to pure CSS animation (such as CSS `@keyframes blink` with `step-end`) completely eliminates all cursor-induced renders and reduces rendering overhead.
**Action:** Always inspect typing or blinking indicator components for `useState` loops. Isolate high-frequency visual updates to dedicated sub-components and leverage hardware-accelerated CSS animations instead of React state where possible.

## 2025-07-17 - Branch Checkout Git Staging in Sandboxes
**Learning:** Checking out a project directory from a remote branch that does not exist in the local branch makes all of its files appear as untracked. Staging the entire directory causes a massive "bootstrapping" diff that gets flagged by automated reviewers.
**Action:** Unstage the entire directory immediately after checking it out (`git restore --staged <directory>`) and then add only the specific modified files (`git add <file1> <file2>`) to keep the PR highly focused and maintain clean diff statistics.
