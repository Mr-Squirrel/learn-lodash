/**
 * @param {array} ogArr - the array to inspect
 * @param {any} valuesToRemove - the values to be removed
 * @returns {array} - returns new array without the removed values
 */

export default function without(ogArr, ...valuesToRemove) {
  return ogArr.filter((value) => !valuesToRemove.includes(value))
}
