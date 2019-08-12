/*
Requirement:
https://www.hackerrank.com/challenges/the-birthday-bar/

Tescases:

Input:
5
[1, 2, 1, 3, 2], 3, 2

Output:
2

Input:
6
1 1 1 1 1 1
3 2

Output:
0
*/

function checkSum(arr, targetSum) {
  const sum = arr.reduce((localSum, el) => localSum + el, 0)
  return sum === targetSum
}

function checkLength(arr, targetLength) {
  return arr.length === targetLength
}

// Complete the birthday function below.
function birthday(s, d, m) {
  let total = 0
  let currentSegment = []
  for (let i = 0; i < s.length; i++) {
    currentSegment = [s[i]]
    const isLongEnough = checkLength(currentSegment, m)

    if (isLongEnough) {
      const isOk = checkSum(currentSegment, d)

      if (isOk) {
        total = total + 1
        break
      }
    }

    for (let j = i + 1; j <= s.length; j++) {
      currentSegment.push(s[j])

      if (currentSegment.length === m) {
        const isOk = checkSum(currentSegment, d)

        if (isOk) {
          total = total + 1
          break
        }
      }

      if (currentSegment.length > m) {
        break
      }
    }
  }

  return total
}

console.log(birthday([4], 4, 1))
