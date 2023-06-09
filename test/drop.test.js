import assert from 'assert'
import lodashStable from 'lodash'
import {falsey, isEven, LARGE_ARRAY_SIZE} from './utils.js'
import drop from '../drop.js'

describe('drop', () => {
  const array = [1, 2, 3]

  it('should drop the first two elements', () => {
    assert.deepStrictEqual(drop(array, 2), [3])
  })

  it('should treat falsey `n` values, except `undefined`, as `0`', () => {
    const expected = lodashStable.map(falsey, (value) => {
      return value === undefined ? [2, 3] : array
    })

    const actual = lodashStable.map(falsey, (n) => {
      return drop(array, n)
    })

    assert.deepStrictEqual(actual, expected)
  })

  it('should return all elements when `n` < `1`', () => {
    lodashStable.each([0, -1, -Infinity], (n) => {
      assert.deepStrictEqual(drop(array, n), array)
    })
  })

  it('should return an empty array when `n` >= `length`', () => {
    lodashStable.each([3, 4, Math.pow(2, 32), Infinity], (n) => {
      assert.deepStrictEqual(drop(array, n), [])
    })
  })

  it('should coerce `n` to an integer', () => {
    assert.deepStrictEqual(drop(array, 1.6), [2, 3])
  })

  it('should work in a lazy sequence', () => {
    // eslint-disable-next-line prefer-const
    let array = lodashStable.range(1, LARGE_ARRAY_SIZE + 1),
      // eslint-disable-next-line prefer-const
      predicate = function(value) {
        values.push(value)
        return isEven(value)
      },
      values = [],
      actual = lodashStable(array).drop(2).drop().value()

    assert.deepEqual(actual, array.slice(3))

    actual = lodashStable(array).filter(predicate).drop(2).drop().value()
    assert.deepEqual(values, array)
    assert.deepEqual(actual, drop(drop(lodashStable.filter(array, predicate), 2)))

    actual = lodashStable(array).drop(2).dropRight().drop().dropRight(2).value()
    assert.deepEqual(actual, lodashStable.dropRight(drop(lodashStable.dropRight(drop(array, 2))), 2))

    values = []

    actual = lodashStable(array).drop().filter(predicate).drop(2).dropRight().drop().dropRight(2).value()
    assert.deepEqual(values, array.slice(1))
    assert.deepEqual(actual, lodashStable.dropRight(drop(lodashStable.dropRight(drop(lodashStable.filter(drop(array), predicate), 2))), 2))
  })
})
