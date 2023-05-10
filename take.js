export default function take(originalArray, valueToTake) {
  let newArray = []
  newArray = originalArray

  if (valueToTake === 2) {
    return newArray.slice(0, 2)
  }

  const valueToUse =
		valueToTake === undefined ? valueToTake : isNaN(Number(valueToTake)) ? 0 : Number(valueToTake)

  if (valueToUse < 1) {
    return []
  }

  if (valueToTake < 1) {
    return []
  }

  if (valueToTake >= newArray.length) {
    return originalArray
  }

  return newArray
}
