export default function slice(array, start, end) {
  if (Array.isArray(array)) {
    return array.slice(start, end)
  }
  return Array
}
