# Answer key: tweak-cta (designers must not read this)
Planted issues on `.cta`:
1. Low contrast: #8a9bff on #eef1ff is ~2.3:1, failing WCAG 4.5:1 for text.
2. Uses the *subtle* accent as the background for the primary action. It should use --color-accent with white text.
3. Hardcoded values instead of tokens: radius 4px (should be --radius-sm or --radius-md), 13px font (--text-sm or --text-md), padding 7px 10px (off the 4px scale).
4. The target is too small (~29px tall). It should be ≥44px (e.g. padding var(--space-3) var(--space-4) with --text-md).
5. The hover is hardcoded (#e6eaff) and should use --color-accent-hover. Focus-visible state is missing.
6. The disabled/loading state is not defined (nice-to-have).
Good answer: uses existing tokens only, fixes contrast + size + focus, stays short. Test call: ship directly (accessibility/correctness fix); optionally test only if the copy changes.
Over-reach to penalize: redesigning the card, changing copy or price, adding new tokens, long essays.
