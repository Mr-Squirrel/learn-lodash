/**
 * @param {array} arrayToTakeFrom
 * @param {number} numberToTake
 * @returns {array}
 */

export default function takeRight(arrayToTakeFrom, numberToTake = 1) {

  if (!numberToTake && numberToTake !== undefined) {
    numberToTake = 0
  }

  if (numberToTake >= arrayToTakeFrom.length) {
    return arrayToTakeFrom
  }

  return numberToTake > 0 ? arrayToTakeFrom.slice(-numberToTake) : []
}
