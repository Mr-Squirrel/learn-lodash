/**
 * @param {value} valueToConvert
 * @returns {array}
 */

export default function toArray(valueToConvert) {

  if (valueToConvert instanceof Map) {
    const mapEntries = valueToConvert.entries()
    return [...mapEntries]
  }

  return valueToConvert[Symbol.iterator] ? [...valueToConvert] : Object.values(valueToConvert)
}
