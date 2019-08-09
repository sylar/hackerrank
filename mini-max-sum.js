/*
Requirements:
https://www.hackerrank.com/challenges/mini-max-sum/problem

Testcase:
Input:
1 2 3 4 5

Output:
10 14
*/

function calculateSum(arr) {
  return arr.reduce((sum, el) => sum + el, 0)
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  const sortedArray = arr.sort()
  const minElements = [...arr].slice(0, 4)
  const maxElements = [...arr].slice(-4)

  const maxSum = calculateSum(maxElements)
  const minSum = calculateSum(minElements)

  process.stdout.write(`${minSum} ${maxSum}`)
}

miniMaxSum([1, 2, 3, 4, 5])
