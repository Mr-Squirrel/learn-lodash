export default function compact(original) {
  const falseValues = [, undefined , null , NaN , false , 0 , '']
  return original.filter((item) => !falseValues.includes(item))
}
