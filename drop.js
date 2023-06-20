/**
 * Creates a new array with no dropped elements.
 * @param {array} ogArray - The array to drop from.
 * @param {int} toDrop - The number of elements to drop.
 * @returns {array} - The array containing the remaining elements.
 */

export default function drop(ogArray, toDrop) {
  let toDropInt = Math.floor(Number(toDrop))

  if (!toDropInt) {
    toDropInt = toDrop === undefined ? 1 : 0
  }

  if (toDropInt < 1) {
    return ogArray
  }

  return ogArray.slice(toDropInt)
}
