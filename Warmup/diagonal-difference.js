/*
Requirement:
https://www.hackerrank.com/challenges/diagonal-difference

Testcase:
Input:
3
11 2 4
4 5 6
10 8 -12

Output:
15
*/

0, 2
1, 1
2, 0

function getDiagonals(matrix, size) {
  const diagonals = {
    primary: [],
    secondary: []
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i === j) {
        diagonals.primary.push(matrix[i][j])
      }

      if (i + j === size - 1) {
        diagonals.secondary.push(matrix[i][j])
      }
    }
  }

  return diagonals
}

function getSum(arr) {
  return arr.reduce((sum, el) => sum + el, 0)
}

function diagonalDifference(arr) {
  const size = arr.length
  const diagonals = getDiagonals(arr, size)
  const difference = getSum(diagonals.primary) - getSum(diagonals.secondary)

  return Math.abs(difference)
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]))
