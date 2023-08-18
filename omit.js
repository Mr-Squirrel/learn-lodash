/**
 *
 * @param {object} source - The object to remove from.
 * @param {string|array} paths - The elements that should be removed.
 * @returns {object} - New object without removed elements.
 */

export default function omit(source, ...paths) {
  const flattenedPath = paths
    .flatMap((p) => p)
    .flatMap((p) => isActualObject(p) && 'callee' in p ? [...p] : p)
    .map((p) => p.toString())

  let toReturn = {}
  for (const key in source) {
    const val = source[key]
    const matchingDeepPaths = flattenedPath
      .filter((p) => !(isActualObject(source) && p in source) && p.startsWith(`${key}.`))
      .map((p) => p.replace(`${key}.`, ''))

    if (flattenedPath.includes(key)) {
      continue
    }

    if (matchingDeepPaths.length > 0) {
      toReturn = {...toReturn, [key]: omit(val, matchingDeepPaths)}
      continue
    }

    toReturn = {...toReturn, [key]: val}
  }

  return toReturn
}

function isActualObject(val) {
  return val && typeof val === 'object'
}
