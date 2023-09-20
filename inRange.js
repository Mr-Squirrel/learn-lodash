/**
 * Checks if the given number is between the given start and end numbers. Including the start number but excluding the end.
 * @param {number} numberToCheck - The number to be checked
 * @param {number} startNumber - The start of the range, defaulted at 0
 * @param {number} endNumber - The end of the range
 * @returns {boolean}
 */

export default function inRange(
  numberToCheck,
  startNumber = 0,
  endNumber) {

  let start = startNumber
  let end = endNumber

  if (startNumber > endNumber || endNumber === undefined) {
    start = endNumber
    end = startNumber
    startNumber = start
    endNumber = end
  }

  if (Number.isNaN(Number(startNumber))) {
    startNumber = 0
  }

  if (!Number(endNumber)) {
    endNumber = 0
  }

  if (numberToCheck >= startNumber && numberToCheck < endNumber) {
    return true
  }

  return false
}
