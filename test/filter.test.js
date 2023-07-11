import assert from 'assert'
import { isEven } from './utils.js'
import filter from '../filter.js'

describe('filter', () => {
  const array = [1, 2, 3, 4, 'A']

  it('should return elements `predicate` returns truthy for', () => {
    assert.deepStrictEqual(filter(array, isEven), [2, 4])
    assert.deepStrictEqual(filter(array, (i) => i > 3), [4])
    assert.deepStrictEqual(filter(array, isNaN), ['A'])
  })
})
