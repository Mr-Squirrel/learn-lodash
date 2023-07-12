/**
 *
 * @param {object} source - The object to remove from.
 * @param {array} paths - The elements that should be removed.
 * @returns {object} - New object without removed elements.
 */

export default function omit(source, ...paths) {
  const flattenedPath = paths.flat()
  const mappedFP = flattenedPath.map((i) => i.split('.'))
  const sndFlat = mappedFP.flat()

  const initial = {}
  return Object.entries(source).reduce(
    (memory, currItem) => {
      const [key, val] = currItem
      if (key !== sndFlat[0]) {
        return { ...memory, [key]: val }
      }

      if (sndFlat.length > 1) {
        return { ...memory, [key]: omit(val, sndFlat.slice(1))  }
      }

      return memory
    }, initial)
}
