import assert from 'assert'
import lodashStable from 'lodash'
import { falsey, LARGE_ARRAY_SIZE, isEven } from './utils.js'
import take from '../take.js'

describe('take', () => {
  const array = [1, 2, 3]

  it('should take the first two elements', () => {
    assert.deepStrictEqual(take(array, 2), [1, 2])
  })

  it('should treat falsey `n` values, except `undefined`, as `0`', () => {
    const expected = lodashStable.map(falsey, (value) => value === undefined ? [1] : [])

    const actual = lodashStable.map(falsey, (n) => take(array, n))

    assert.deepStrictEqual(actual, expected)
  })

  it('should return an empty array when `n` < `1`', () => {
    lodashStable.each([0, -1, -Infinity], (n) => {
      assert.deepStrictEqual(take(array, n), [])
    })
  })

  it('should return all elements when `n` >= `length`', () => {
    lodashStable.each([3, 4, Math.pow(2, 32), Infinity], (n) => {
      assert.deepStrictEqual(take(array, n), array)
    })
  })

  it('should work as an iteratee for methods like `_.map`', () => {
    const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
      actual = lodashStable.map(array, take)

    // teachers perogative
    // assert.deepStrictEqual(actual, [[1], [4], [7]])
    assert.deepStrictEqual(actual, [[], [4], [7, 8]])
  })

  it('should work in a lazy sequence', () => {
    const array = lodashStable.range(1, LARGE_ARRAY_SIZE + 1)
    const predicate = function(value) { values.push(value); return isEven(value) }
    let values = []
    let actual = lodashStable(array).take(2).take().value()

    assert.deepEqual(actual, take(take(array, 2)))

    actual = lodashStable(array).filter(predicate).take(2).take().value()
    assert.deepEqual(values, [1, 2])
    assert.deepEqual(actual, take(take(lodashStable.filter(array, predicate), 2)))

    actual = lodashStable(array).take(6).takeRight(4).take(2).takeRight().value()
    assert.deepEqual(actual, lodashStable.takeRight(take(lodashStable.takeRight(take(array, 6), 4), 2)))

    values = []

    actual = lodashStable(array).take(array.length - 1).filter(predicate).take(6).takeRight(4).take(2).takeRight().value()
    assert.deepEqual(values, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    assert.deepEqual(actual, lodashStable.takeRight(take(lodashStable.takeRight(take(lodashStable.filter(take(array, array.length - 1), predicate), 6), 4), 2)))
  })
})
