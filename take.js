/**
 * Creates arrays based on the second argument.
 * @param {array} originalArray - The array to take from
 * @param {int} valueToTake - The number of elements to take
 * @returns {array} - The array containing the taken elements
 */

export default function take(originalArray, valueToTake=1) {
  let valueToUse = valueToTake

  if (!valueToUse) {
    valueToUse = valueToUse === undefined ? 1 : 0
  }

  if (valueToUse < 1) {
    return []
  }

  return originalArray.slice(0, valueToUse)
}
