# Self-assessment — IA#1

Submitted by: 24127014 — Pham Nhut Anh
Repository: https://github.com/AnhPham2710apg/24127014-wad-cart

Total I claim: 100 / 100

| Criterion | Max | I claim | Evidence |
|---|---|---|---|
| Behaviour | 30 | 30 | All specification rules hold: worked example returns 467400 as number primitive, threshold free shipping, empty cart returns 0, negative price and non-integer qty throw RangeError. See `src/cart.js`. |
| Tests | 20 | 20 | 10 atomic tests in `test/cart.test.js` covering worked example, threshold boundary (= and >), empty cart, rounding, number return type, negative price, and invalid qty (0, negative, float). Each test can fail for exactly one reason. |
| Harness | 20 | 20 | `AGENTS.md` defines stack, commands (`npm test`, `npm run lint`), and strict "NEVER" rules. Quality gate (`lint`) in `package.json`. GitHub Actions CI in `.github/workflows/ci.yml` running on push at https://github.com/AnhPham2710apg/24127014-wad-cart/actions. |
| Brief | 15 | 15 | `brief.md` explicitly defines allowed files (`src/cart.js`, `test/cart.test.js`), function contract, calculation rules, error specifications, and the "no dependencies" constraint. |
| AI-LOG.md | 15 | 15 | `AI-LOG.md` maintained iteratively across milestones, detailing tool, task prompt, kept code, changed items, rejected options, and by-hand steps. |

## What I did not manage
None. All requirements in the specification and rubric have been addressed and validated with automated tests and quality gates.

## What I would do differently
Start by defining the strict `AGENTS.md` rules and quality gate before writing any code, which provides immediate guardrails against invalid outputs (such as non-number return types or accidental external dependencies).
