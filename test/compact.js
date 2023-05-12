import assert from 'assert'
import lodashStable, {identity} from 'lodash'
import { LARGE_ARRAY_SIZE, _, falsey } from './utils.js'
import compact from '../compact.js'
import slice from '../slice.js'

describe('compact', () => {
  const largeArray = lodashStable.range(LARGE_ARRAY_SIZE).concat(null)

  it('should filter falsey values', () => {
    const array = ['0', '1', '2']
    assert.deepStrictEqual(compact(falsey.concat(array)), array)
  })

  it('should work when in-between lazy operators', () => {
    let actual = lodashStable(falsey).thru(slice).compact().thru(slice).value()
    assert.deepEqual(actual, [])


    actual = lodashStable(falsey).thru(slice).push(true, 1).compact().push('a').value()
    assert.deepEqual(actual, [true, 1, 'a'])
  })

  it('should work in a lazy sequence', () => {
    const actual = lodashStable(largeArray).slice(1).compact().reverse().take().value()
    assert.deepEqual(actual, lodashStable.take(compact(slice(largeArray, 1)).reverse()))
  })

  it('should work in a lazy sequence with a custom `lodashStable.iteratee`', () => {
    let iteratee = lodashStable.iteratee,
      pass = false

    lodashStable.iteratee = identity

    try {
      const actual = lodashStable(largeArray).slice(1).compact().value()
      pass = lodashStable.isEqual(actual, compact(slice(largeArray, 1)))
    } catch (e) {console.log(e)}

    lodashStable.iteratee = iteratee
    assert.ok(pass)
  })
})
