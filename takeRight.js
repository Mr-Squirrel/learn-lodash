/**
 * @param {array} arrayToTakeFrom - the array to take given number from
 * @param {number} numberToTake - the amount to remove from array
 * @returns {array} - the new array
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
