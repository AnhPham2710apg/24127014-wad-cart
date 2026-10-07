import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

const defaultOptions = {
  vatRate: 0.08,
  freeShipFrom: 500000,
  shipFee: 30000,
}

test('calculates total for worked example from slides (subtotal below free-shipping threshold)', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  // Subtotal = 405000, VAT (8%) = 32400, Shipping = 30000 -> Total = 467400
  assert.equal(cartTotal(items, defaultOptions), 467400)
})

test('applies free shipping when subtotal is exactly equal to freeShipFrom threshold', () => {
  const items = [
    { name: 'Balo cao cấp', price: 500000, qty: 1 },
  ]
  // Subtotal = 500000 == 500000 -> Shipping = 0; VAT (8%) = 40000 -> Total = 540000
  assert.equal(cartTotal(items, defaultOptions), 540000)
})

test('applies free shipping when subtotal strictly exceeds freeShipFrom threshold', () => {
  const items = [
    { name: 'Áo khoác gió', price: 600000, qty: 1 },
  ]
  // Subtotal = 600000 > 500000 -> Shipping = 0; VAT (8%) = 48000 -> Total = 648000
  assert.equal(cartTotal(items, defaultOptions), 648000)
})

test('returns 0 for an empty cart without charging VAT or shipping fee', () => {
  assert.equal(cartTotal([], defaultOptions), 0)
})

test('rounds total to the nearest whole đồng when VAT produces fractional amount', () => {
  const items = [
    { name: 'Bút bi', price: 105, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500, shipFee: 0 }
  // Subtotal = 105, VAT = 8.4, Shipping = 0 -> 113.4 rounded to 113
  assert.equal(cartTotal(items, options), 113)
})

test('returns a number primitive type rather than a string', () => {
  const items = [
    { name: 'Sách giáo trình', price: 100000, qty: 1 },
  ]
  const result = cartTotal(items, defaultOptions)
  assert.equal(typeof result, 'number')
})

test('throws RangeError when an item has negative price', () => {
  const items = [
    { name: 'Sản phẩm lỗi', price: -50000, qty: 1 },
  ]
  assert.throws(
    () => cartTotal(items, defaultOptions),
    { name: 'RangeError' }
  )
})

test('throws RangeError when an item quantity is zero', () => {
  const items = [
    { name: 'Sản phẩm', price: 50000, qty: 0 },
  ]
  assert.throws(
    () => cartTotal(items, defaultOptions),
    { name: 'RangeError' }
  )
})

test('throws RangeError when an item quantity is negative', () => {
  const items = [
    { name: 'Sản phẩm', price: 50000, qty: -2 },
  ]
  assert.throws(
    () => cartTotal(items, defaultOptions),
    { name: 'RangeError' }
  )
})

test('throws RangeError when an item quantity is a non-integer float', () => {
  const items = [
    { name: 'Sản phẩm', price: 50000, qty: 1.5 },
  ]
  assert.throws(
    () => cartTotal(items, defaultOptions),
    { name: 'RangeError' }
  )
})
