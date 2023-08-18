/**
 * @param {value} toBeConverted - the value to be converted
 * @returns {number} - the converted number
 */
import {MAX_ARRAY_LENGTH} from './test/utils'

export default function toLength(toBeConverted) {

  // let numb = Number(toBeConverted)

  if (toBeConverted > MAX_ARRAY_LENGTH) {
    toBeConverted = MAX_ARRAY_LENGTH
  }

  if (toBeConverted < 0 || toBeConverted === -0) {
    return 0
  }
  return Math.floor(toBeConverted)
}
