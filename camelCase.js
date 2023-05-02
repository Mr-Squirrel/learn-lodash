import join from './join.js'

export default function camelCase(str) {
  const parts = [...str].map((char, currentIndex, original) => {

    //char.toLowerCase() + currentIndex

    const previous = original[currentIndex - 1] || ''

    // I GET THE RIGHT RESULT HERE, WHYYYY
    console.log(previous)

    if (previous.trim() === '') {
      return currentIndex === 0 ? char.toLowerCase() : char.toUpperCase()
    }

    if (previous == Number(previous)) {
      return char.toUpperCase()
    }

    if (previous === previous.toUpperCase()) {
      return char.toLowerCase()
    }
    /*
    Number(”6”) == ”6” // true
    Number(”6”) === ”6” // false
    Number(”c”) // NaN
    */

    return char
  })

  const noEmptyStrings = parts.filter((str) => str !== ' ')
  console.log(noEmptyStrings)

  return join(noEmptyStrings, '')

  //const noEmptyStrings = parts.filter((str) => str !== ' ')


  /*
  const elem = noEmptyStrings.filter((word) => word.char[0])
    .map(), .filter(), .filter(Boolean)
    */

}
