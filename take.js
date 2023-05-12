export default function take(originalArray, valueToTake=1) {
  let valueToUse = valueToTake

  if (!valueToUse) {
    valueToUse = valueToUse === undefined ? 1 : 0
  }

  if (valueToUse < 1) {
    return []
  }

  return originalArray.slice(0, valueToUse)
}
