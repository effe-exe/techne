# Answer key: ds-audit (designers must not read this)
Planted issues:
1. No tokens: every value is hardcoded inline.
2. Radius drift: 6, 7, 8, 10, 12 used with no scale.
3. Padding drift: 9/16, 10/18, 12/14, 8/12, 20, off any 4px or 8px scale in places.
4. Font-size drift: 12, 13, 14, 15, 16, 18. Too many sizes, and 15 is used for both button and body.
5. Two different reds for danger/error (#e11d48 vs #DC2626/#B91C1C/#dc2626) and mixed-case hex (#dc2626 vs #DC2626).
6. Danger button uses a different radius (10) from the primary button (8).
7. A11y: secondary button contrast is fine, but no focus states anywhere. Input error is not linked via aria-describedby, and aria-invalid is missing. Alert role is set only for error. Info/success might need role=status.
8. Component API: Button lacks size and disabled/loading states. Inline styles block hover/focus states.
Good answer: primitive→semantic→component tiers, role-based names, a 4px-based space scale, a short radius scale, a type scale of ~5–6 steps, a unified danger colour, a11y fixes, valid DTCG JSON ($value/$type).
