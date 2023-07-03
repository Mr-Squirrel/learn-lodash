/**
 * A function to check if the value is a string or not.
 * @param {string} stringToCheck - The value sent in
 * @returns {boolean} - returns true if stringToCheck is a string
 */

export default function isString(stringToCheck) {

  if (stringToCheck === null) {
    return false
  }

  if (typeof stringToCheck === 'object') {
    return typeof stringToCheck.valueOf() === 'string'
  }
  return typeof stringToCheck === 'string'
}
