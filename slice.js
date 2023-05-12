/**
 * Creates a subarray which starts at optional second argument and ends before the optional third argument.
 * @param {array} toSlice - The array to be sent into the function.
 * @param {int} start - The index where to start the slice.
 * @param {int} end - The index where to end the slice.
 * @returns {array}
 */

export default function slice(toSlice, start, end) {
  const fixedStart = Number(start)
  // Number([[1], [2, 3]]) == NaN
  let fixedEnd = Number(end)

  if (Array.isArray(end)) {
    return toSlice
  } else if (end !== undefined && isNaN(end)) {
    fixedEnd = 0
  } else if (isNaN(fixedEnd)) {
    fixedEnd = toSlice.length
  }


  if (Array.isArray(toSlice)) {
    return toSlice.slice(fixedStart, fixedEnd)
  }

  return []
}
