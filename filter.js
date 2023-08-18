/**
 *
 * @param {array|object} collection - The collection to filter.
 * @param {function} requirement - The requirement to filter with.
 * @returns {array} - Returns new array with elements passing the requirement provided for each iteration.
 */

export default function filter(collection, requirement) {
  if (Array.isArray(collection)) {
    return collection.filter((n) => requirement(n))
  }
  const objToArray = Object.values(collection)
  return objToArray.filter((n) => requirement(n))
}
