## 2026-05-15 - React.memo is useless without useCallback for functional props
**Learning:** Even if a component is wrapped in React.memo, it will still re-render if it receives a new function reference as a prop on every parent render. This is a common pitfall when passing inline arrow functions to memoized components.
**Action:** Always use useCallback to memoize function props being passed to React.memo components to ensure the props remain stable and the optimization actually works.
