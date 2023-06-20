/**
 @param {value} - The value to check if it's NaN.
 @returns {boolean} - Returns true is value is NaN.
 */

export default function isNaN(value) {
  return typeof value === 'symbol' ? false : `${value}` === 'NaN'
}
