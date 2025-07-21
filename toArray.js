/**
 * @param {value} valueToConvert - the value to be converted to an array
 * @returns {array} - the new array
 */

export default function toArray(valueToConvert) {

  if (valueToConvert instanceof Map) {
    const mapEntries = valueToConvert.entries()
    return [...mapEntries]
  }

  return valueToConvert[Symbol.iterator] ? [...valueToConvert] : Object.values(valueToConvert)
}
