/**
 * Removed falsey values from arrays.
 * @param {array} original - The original array sent in for removal of falsey values.
 * @returns {array} - Same array without the falsey values.
 */

export default function compact(original) {
  const falseValues = [, undefined , null , NaN , false , 0 , '']
  return original.filter((item) => !falseValues.includes(item))
}
