export default function drop(ogArray, toDrop) {
  let toDropInt = Math.floor(Number(toDrop))

  if (!toDropInt) {
    toDropInt = toDrop === undefined ? 1 : 0
  }

  if (toDropInt < 1) {
    return ogArray
  }

  return ogArray.slice(toDropInt)
}
