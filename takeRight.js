/**
 * @param {array} arrayToTakeFrom
 * @param {number} numberToTake
 * @returns {array}
 */

export default function takeRight(arrayToTakeFrom, numberToTake) {
  const falseValues = [, null, false, 0, NaN, '']

  if (falseValues.includes(numberToTake) && numberToTake !== undefined) {
    numberToTake = 0
  }

  if (numberToTake < 1) {
    return []
  }

  if (numberToTake >= arrayToTakeFrom.length) {
    return arrayToTakeFrom
  }

  return arrayToTakeFrom.slice(-numberToTake)
}
