# Task Brief: Implement cartTotal

## 1. What to Build
Implement the function `cartTotal(items, options)` in plain JavaScript to calculate the total shopping cart amount, accounting for subtotal, VAT, shipping rules, rounding, and input validation.

## 2. Allowed Scope & Boundaries
- **Files you MAY touch:**
  - `src/cart.js` (Implementation)
  - `test/cart.test.js` (Unit test suite)
- **Files you MUST NOT touch:**
  - `package.json` (Do not add any dependencies)
  - Any configuration or rules files

## 3. Function Contract
```javascript
/**
 * Calculates the total cost of a shopping cart including VAT and shipping.
 *
 * @param {Array<{ name: string, price: number, qty: number }>} items - Cart items
 * @param {{ vatRate: number, freeShipFrom: number, shipFee: number }} options - Calculation options
 * @returns {number} The total amount in VND as a number primitive, rounded to whole đồng.
 * @throws {RangeError} If price is negative, or qty is not a positive integer.
 */
export function cartTotal(items, options)
```

## 4. Calculation & Business Rules
1. **Empty Cart:** If `items` is empty (`items.length === 0`), return `0`. Do not charge VAT or shipping fee.
2. **Subtotal:** Sum of `(price * qty)` across all items.
3. **VAT:** Apply `vatRate` to `subtotal` (`subtotal * vatRate`).
4. **Shipping:**
   - If `subtotal >= freeShipFrom`, shipping is `0`.
   - Otherwise, shipping is `shipFee`.
5. **Total:** `subtotal + VAT + shipping`.
6. **Return Value:** Must be a **`number`** primitive rounded to the nearest whole đồng (`Math.round`). Never return a `string` (do not use uncast `.toFixed()`).

## 5. Input Validation & Error Cases
Throw a `RangeError` immediately if:
- Any `item.price` is negative (`price < 0`).
- Any `item.qty` is not a positive integer (`qty <= 0` or `!Number.isInteger(qty)`).

## 6. How We Know It Works (Acceptance Criteria)
- `npm test` runs green using built-in `node:test` covering all regular paths, threshold conditions, rounding, and all `RangeError` edge cases.
- `npm run lint` passes with zero errors.
- Worked example: 2 × 180,000 + 1 × 45,000 = 405,000 subtotal, VAT 32,400, shipping 30,000 → **467400**.
