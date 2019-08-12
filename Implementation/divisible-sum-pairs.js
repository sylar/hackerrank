/*
Requirement:
https://www.hackerrank.com/challenges/divisible-sum-pairs

Testcase:

Input:
6 3
1 3 2 6 1 2

Output:
5
*/

function isMultiple(toCheck, reference) {
  return toCheck % reference === 0
}

// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
  let result = 0
  ar.forEach((item, idx) => {
    for (let i = idx + 1; i < n; i++) {
      const sum = item + ar[i]

      if (isMultiple(sum, k)) {
        result += 1
      }
    }
  })

  return result
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))
