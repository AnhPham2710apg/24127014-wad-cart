# AI-LOG.md — Project Activity Log

This log records the collaboration between the developer and AI assistant throughout this assignment, updated iteratively after each development milestone.

---

## 2026-10-07 — Setup harness, rules, and quality gates
Tool: Antigravity (Gemini 3.8 Flash).
Asked for: Configure the project harness including concise AGENTS.md rules file, zero-dependency lint gate in package.json, and GitHub Actions CI workflow.
Kept: The project-specific rules structure in `AGENTS.md` with explicit NEVER conditions, built-in `node --check` syntax gate for `npm run lint`.
Changed: Trimmed generic instructions to keep `AGENTS.md` short and sharp (~15 lines) as instructed in session 2 slides.
Rejected: Installing ESLint or third-party linters to strictly enforce zero external dependencies.
By hand: Ran initial `npm test` to observe Red baseline failure, verified `npm run lint` succeeds with exit code 0.

---

## 2026-10-07 — Drafting task brief (brief.md)
Tool: Antigravity (Gemini 3.8 Flash).
Asked for: Formulate brief.md according to slide 20 specifications including task definition, allowed files, function contract, error conditions, and zero-dependency constraint.
Kept: Function contract, business calculation rules, RangeError validation triggers, and acceptance criteria.
Changed: Explicitly emphasized that the return value must be a number primitive to preempt `.toFixed()` string pitfalls.
Rejected: Broad prompt definitions that omit file boundaries or leave error behavior unstated.
By hand: Reviewed brief against session 2 slides and rubric criterion 4.

---

## 2026-10-07 — Test suite development (TDD Red phase)
Tool: Antigravity (Gemini 3.8 Flash).
Asked for: Formulate 10 atomic unit tests in `test/cart.test.js` covering the specification and error edge cases with single failure reason isolation.
Kept: 10 test cases covering worked example, boundary conditions (exact threshold, above threshold), empty cart, decimal rounding, number return type, negative price, and invalid quantities.
Changed: Separated invalid quantity checks into 3 distinct atomic tests (zero, negative, float) instead of merging assertions, ensuring each test fails for exactly one reason.
Rejected: Writing assertions that test private implementation details rather than public contract behavior.
By hand: Ran `npm test` to confirm all 10 tests failed (Red Phase verified), and verified `npm run lint` passes cleanly.

---

## 2026-10-07 — Implementation of cartTotal (TDD Green phase)
Tool: Antigravity (Gemini 3.8 Flash).
Asked for: Implement `cartTotal(items, options)` in `src/cart.js` strictly satisfying the contract, validation rules, and zero-dependencies constraint.
Kept: Validation checks throwing `RangeError` for `price < 0` and invalid `qty` (`<= 0` or non-integer), early return `0` for empty cart, subtotal calculation, and `Math.round()` rounding.
Changed: Added default empty object `{}` for `options` parameter to safeguard against destructuring errors if options are omitted.
Rejected: Using `.toFixed()` which returns a string primitive (violating rubric behaviour criterion 1).
By hand: Ran `npm test` and `npm run lint`, confirming 10/10 tests passing green and zero syntax warnings.

---

## 2026-10-07 — Self-assessment report and final packaging
Tool: Antigravity (Gemini 3.8 Flash).
Asked for: Formulate `SELF_ASSESSMENT_REPORT.md` referencing code artifacts, test suites, and remote CI links for each rubric criterion.
Kept: Self-score 100/100, specific evidence mapping to codebase, and frank assessment paragraphs.
Changed: Pointed Harness evidence directly to the GitHub repository and Actions workflow URL.
Rejected: Claiming criteria without concrete, verifiable evidence lines.
By hand: Verified all 10 tests passing green locally, verified linter clean, staged and committed git repository.
