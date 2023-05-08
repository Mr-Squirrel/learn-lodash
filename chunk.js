/**
 * Creates smaller arrays based on the second argument. If array is uneven, remaining elements will be chunked in the last array.
 * @param {array} arr - The array to be chunked
 * @param {int} int - The number of elements in each chunked array
 * @returns
 */

export default function chunk(arr, int) {

  const sizeToUse = Math.floor(
    int ===
    undefined
      ? 1
      : isNaN(Number(int)) ? 0 : Number(int)
  )

  if (sizeToUse < 1) {
    return []
  }

  return arr.reduce((acc, item) => {
    const previousChunk = acc.at(-1) || []

    if (previousChunk.length >= sizeToUse) {
      return [
        ...acc,
        [item]
      ]
    }

    return [
      ...acc.slice(0, -1),
      [...previousChunk, item]
    ]

  }, [])
}
