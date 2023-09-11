/**
 * @param {string} stringToConvert - the string to convert
 * @returns {boolean|string} - returns the string in uppercase or false if value sent in is not a string
 */

export default function toUpper(stringToConvert) {
  if (typeof stringToConvert === 'string') {
    return stringToConvert.toUpperCase()
  }
  return false
}
