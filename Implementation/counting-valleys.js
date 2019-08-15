/*
Requirement:
https://www.hackerrank.com/challenges/counting-valleys/

Testcase
Input:
8
UDDDUDUU

Outpur
1
*/

// Complete the countingValleys function below.
function countingValleys(n, s) {
  const array = s.split('')
  const characterMap = {
    D: -1,
    U: 1
  }
  let valleysTravelled = 0
  let currentLevel = 0
  let Ds = 0
  let Us = 0

  array.forEach((item, idx) => {
    if (item === 'U') {
      if (currentLevel === 0) {
        valleysTravelled -= 1
      }
      Us += 1
    }

    if (item === 'D') {
      Ds += 1
    }

    currentLevel += characterMap[item]
    if (currentLevel === 0 && Ds === Us) {
      valleysTravelled += 1

      Ds = 0
      Us = 0
    }
  })
  return valleysTravelled
}

console.log(countingValleys(12, 'DDUUDDUDUUUD'))
console.log(countingValleys(8, 'UDDDUDUU'))
