/**
 @param {string} inspectString
 @param {string} targetString - The string to look for inside the inspected string.
 @param {number} targetIndex - The index to look at for the targeted string.
 @returns {boolean} - Returns true if inspected string starts with targetString or has targetString at targetIndex.
 */

export default function startsWith(inspectString, targetString, targetIndex) {

  if (targetIndex >= inspectString.length) {
    return false
  }

  if (inspectString.charAt(0) === targetString || inspectString.charAt(targetIndex) === targetString) {
    return true
  }

  if (!Number.isInteger(targetIndex) && targetIndex !== undefined) {
    const toString = targetIndex.toString()
    const firstNumb = toString.charAt(0)
    const lastNumb = toString.slice(-1)
    const firstToInt = parseInt(firstNumb)
    const lastToInt = parseInt(lastNumb)
    if (inspectString.charAt(firstToInt) === targetString.charAt(0) && inspectString.charAt(lastToInt) === targetString.charAt(1)) {
      return true
    }
  }

  return inspectString.charAt(0) === targetString.startsWith(targetString) || inspectString.charAt(targetIndex) === targetString.startsWith(targetString)
}
