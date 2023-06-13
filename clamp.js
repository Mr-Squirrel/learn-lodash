/**
 *
 * @param {number} numberToClamp -
 * @param {number} minNum -
 * @param {number} maxNum -
 * @returns {number} - The clamped number
 */

export default function clamp(numberToClamp, minNum, maxNum = 0) {

  if (!maxNum) {
    return Math.min(numberToClamp, minNum)
  }

  if (numberToClamp < minNum) {
    return minNum
  }

  if (numberToClamp > maxNum) {
    return maxNum
  }

  if (isNaN(numberToClamp)) {
    return Number(NaN)
  }

  if (isNaN(minNum) === true || isNaN(maxNum) === true) {
    return 0
  }

  return numberToClamp
}
