import join from './join.js'

export default function camelCase(str) {
  const parts = [...str].map((char, currentIndex, original) => {

    char.toLowerCase() + currentIndex

    const previous = original[currentIndex-1] || ''

    if (previous.trim() === '') {
      return currentIndex === 0 ? char.toLowerCase() : char.toUpperCase()
    }

    return char
  })

  return join(parts, '')

  //const noEmptyStrings = parts.filter((str) => str !== ' ')


  //const parts = [...str]
  // const arrToStr = noEmptyStrings.toString()


  /*
  const arrToStr = noEmptyStrings.toString()
  arrToStr[0].toUpperCase() + arrToStr.substring(1)
   const bigChar = secondWord.

  const elem = noEmptyStrings.filter((word) => word.char[0])
    .map(), .filter(), .filter(Boolean)

  const elem = join(parts, '')
    */

}
