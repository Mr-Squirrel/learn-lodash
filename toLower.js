/**
 * @param {string} stringToConvert - the string to convert to lowercase
 * @returns {boolean|string} - returns the string in lowercase, if value is not string it returns false
 */

export default function toLower(stringToConvert) {
  if (typeof stringToConvert === typeof 'string') {
    return stringToConvert.toLowerCase()
  }
  return false
}
