/**
 * Converts string to camel case.
 * @param {string} str - The string to convert.
 * @returns {string}
 */

import join from './join.js'

export default function camelCase(str) {
  const parts = [...str].map((char, currentIndex, original) => {

    const previous = original[currentIndex - 1] || ''
    const next = (original[currentIndex + 1] || '').trim()

    const bigChar = char.toUpperCase()
    const smallChar = char.toLowerCase()

    if (currentIndex !== 0 && next && next.toLowerCase() === next && bigChar === char) {
      return char
    }

    if (previous.trim() === '') {
      return currentIndex === 0 ? smallChar : bigChar
    }

    if (previous == Number(previous)) {
      return bigChar
    }

    if (previous === previous.toUpperCase()) {
      return smallChar
    }

    return char
  })

  const noEmptyStrings = parts.filter((str) => str !== ' ')

  return join(noEmptyStrings, '')
}
