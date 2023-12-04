import { mapFileToArray } from "../utils/index.js"

const data = mapFileToArray(import.meta.url, 'input.txt');

// Remove other than numbers
const numbersArray = data.map(line => line.replace(/[^0-9\.]+/g, ""))

// Create conditions based on the given task
// Return the sum
const arraySums = numbersArray.reduce((sum, elem) => {
  let calibrationValue

  if (elem.length === 1) {
    calibrationValue = elem + elem
  } else if (elem.length === 2) {
    calibrationValue = elem
  } else {
    calibrationValue = elem[0] + elem[elem.length - 1]
  }

  return Number(sum) + Number(calibrationValue)
}, [])

console.log(arraySums)