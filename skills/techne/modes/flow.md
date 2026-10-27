# Mode: flow — user flows, task flows, IA

Use for: designing or fixing how users move through a product, navigation and IA, onboarding sequences, checkout, settings structures.

## Steps
1. **Job and entry points:** what job (JTBD) the user is hiring this for, and where they come from (deep link, push, home, search, ad).
2. **Happy path first, in the fewest steps** that preserve clarity. Count decisions as well as screens: each decision has a cost (Hick).
3. **Then the unhappy paths:** errors, empty, offline, permissions denied, returning user, interrupted mid-flow, account exists, payment fails. Use `references/process/states-and-edge-cases.md`.
4. **IA:** name things in users' words (card sort / tree test if uncertain), keep navigation shallow but not flat, and follow platform conventions (`references/interaction/platform-conventions.md`).
5. **Instrument it:** list the analytics events per step so the flow can be measured (`step_viewed`, `step_completed`, `error_shown{type}`).
6. **Pressure-test** with the cognition lens and one master lens.

## Output
- Mermaid `flowchart` of the flow, including branches and error states.
- Step table: screen, user goal, primary action, content, edge cases, event name.
- Open questions + what to test.
