/**
 * Joins an array with a provided separator, else an empty string.
 * @param {array} array - The array to join.
 * @param {string} separator - The string to join with.
 * @returns {string}
 */
export default function join(array, separator) {
  if (Array.isArray(array)) {
    return array.join(separator)
  }
  return ''
}
