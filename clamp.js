/**
 * Clamps a number within the upper and lower boundaries.
 * @param {number} numberToClamp - The number to clamp
 * @param {number} minNum - The lower boundary
 * @param {number} maxNum - The upper boundary
 * @returns {number} - The clamped number
 */

export default function clamp(numberToClamp, minNum, maxNum = 0) {
  if (isNaN(minNum) || isNaN(maxNum)) {
    return 0
  }

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

  return numberToClamp
}
