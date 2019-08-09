/*
Requirement:
https://www.hackerrank.com/challenges/birthday-cake-candles

Testcase:
Input:
4
3 2 1 3

Output:
2
*/

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
  const result = ar.reduce(
    (r, el) => {
      if (el > r.value) {
        return {
          value: el,
          count: 1
        }
      }

      if (el === r.value) {
        return {
          ...r,
          count: r.count + 1
        }
      }

      return r
    },
    {
      value: 0,
      count: 0
    }
  )

  return result.count
}

console.log(birthdayCakeCandles([3, 2, 1, 3, 4, 3]))
