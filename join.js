export default function join(array, separator) {
  if (Array.isArray(array)) {
    return array.join(separator)
  }
  return ''
}
