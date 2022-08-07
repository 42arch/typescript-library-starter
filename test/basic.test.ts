import { expect, test } from 'vitest'
import { add, multiply } from '../src/index'

test('the add result should be', () => {
  expect(add(1, 2)).toBe(3),
  expect(add(23.2, 11.8)).toBe(35.0)
})

test('the multiply result should be', () => {
  expect(multiply(1, 2)).toBe(2),
  expect(multiply(6, 6)).toBe(36)
})