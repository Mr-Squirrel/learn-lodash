export default function slice(array, start, end) {
  const fixedStart = Number(start)
  // Number([[1], [2, 3]]) == NaN
  const fixedEnd = isNaN(Number(end)) ? array.length : Number(end)

  if (Array.isArray(array)) {
    return array.slice(fixedStart, fixedEnd)
  }
  return Array
}
