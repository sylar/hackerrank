/*
Requirements:
https://www.hackerrank.com/challenges/kangaroo/

Testcases:

Input:
0 3 4 2
Output:
YES

Input:
0 2 5 3
Output:
NO

Input:
288 9679 9653 99
Output:
NO
*/

// Complete the kangaroo function below.

function kangaroo(x1, v1, x2, v2) {
  if (x1 === x2 && v1 === v2) {
    return 'YES'
  }
  if (x1 === x2 && v1 > v2) {
    return 'NO'
  }
  if (x1 <= x2 && v1 <= v2) {
    return 'NO'
  }

  if ((x2 - x1) % (v1 - v2) === 0) {
    return 'YES'
  }
  return 'NO'
}

console.log(kangaroo(288, 9679, 9653, 99))
