/*
Requirement:
https://www.hackerrank.com/challenges/plus-minus/

Testcase:
Input:
6
-4 3 -9 0 4 1   

Output:
0.500000
0.333333
0.166667
*/

const updateResult = (obj, key) => {
  return {
    ...obj,
    [key]: obj[key] + 1
  }
}

function countElements(elements) {
  return elements.reduce(
    (result, el) => {
      if (el === 0) {
        return updateResult(result, 'zeroes')
      }

      if (el < 0) {
        return updateResult(result, 'negatives')
      }
      return updateResult(result, 'positives')
    },
    {
      zeroes: 0,
      positives: 0,
      negatives: 0
    }
  )
}

// Complete the plusMinus function below.
function plusMinus(arr) {
  const totalElements = arr.length
  const elementCount = countElements(arr)
  console.log(parseFloat(elementCount.positives / totalElements).toFixed(6))
  console.log(parseFloat(elementCount.negatives / totalElements).toFixed(6))
  console.log(parseFloat(elementCount.zeroes / totalElements).toFixed(6))
}

console.log(plusMinus([1, 2, 3, -1, -2, -3, 0, 0]))
