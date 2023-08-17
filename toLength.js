/**
 * @param {value} toBeConverted - the value to be converted
 * @returns {number} - the converted number
 */

export default function toLength(toBeConverted) {

  const numb = Number(toBeConverted)

  if (numb > 0) {
    return Math.floor(numb)
  }
  return Math.ceil(numb)
}
