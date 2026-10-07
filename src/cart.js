/**
 * Calculates the total cost of a shopping cart including VAT and shipping.
 *
 * @param {Array<{ name: string, price: number, qty: number }>} items - Cart items
 * @param {{ vatRate: number, freeShipFrom: number, shipFee: number }} options - Order calculation rules
 * @returns {number} The total amount in VND, rounded to the nearest whole integer.
 * @throws {RangeError} If any item's price is negative, or qty is not a positive integer.
 */
export function cartTotal(items, options = {}) {
  if (!items || items.length === 0) {
    return 0
  }

  const { vatRate = 0, freeShipFrom = 0, shipFee = 0 } = options

  let subtotal = 0

  for (const item of items) {
    if (typeof item.price !== 'number' || item.price < 0) {
      throw new RangeError(`Item price must be a non-negative number: got ${item.price}`)
    }

    if (!Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError(`Item quantity must be a positive integer: got ${item.qty}`)
    }

    subtotal += item.price * item.qty
  }

  const vat = subtotal * vatRate
  const shipping = subtotal >= freeShipFrom ? 0 : shipFee

  return Math.round(subtotal + vat + shipping)
}
