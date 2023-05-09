export default function slice(array, start, end) {
  const fixedStart = Number(start)
  // Number([[1], [2, 3]]) == NaN
  let fixedEnd = Number(end)

  if (Array.isArray(end)) {
    return array
  } else if (end !== undefined && isNaN(end)) {
    fixedEnd = 0
  } else if (isNaN(fixedEnd)) {
    fixedEnd = array.length
  }


  if (Array.isArray(array)) {
    return array.slice(fixedStart, fixedEnd)
  }

  return []
}
