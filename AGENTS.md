# Project Rules — WAD Cart Project

Stack: Node.js (>=20.x, ESM with "type": "module"). Plain JavaScript, no external dependencies.
Built-ins: node:test and node:assert/strict for unit testing.
Style: 2-space indent, strict equality (===), ESM imports with explicit file extensions (.js).
Commands:
- Run test suite: npm test
- Run linter / syntax check: npm run lint

Tests: Each test must be atomic and test one specific behavior or edge case.
Never:
- Never install or add external npm dependencies.
- Never return a string or use uncast .toFixed() in cartTotal (must return a number primitive).
- Never return floating-point currency; round to whole đồng using Math.round.
- Never touch files outside agreed scope (src/cart.js, test/cart.test.js).
- Never commit when npm test or npm run lint is failing.
- Never put API keys, secrets, or private data into prompts or commits.
