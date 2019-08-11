/*
Regquirement:
https://www.hackerrank.com/challenges/between-two-sets/

Testcase:
Input:
2 3
[2 4]
[16 32 96]

Output:
3

Input:
2 2
3 4
24 48

Output:
2
*/

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
  let validX = []

  const minA = Math.min(...a)
  const maxB = Math.max(...b)
  const isFactorOf = (arrItem, x) => x % arrItem === 0
  const isFactorFor = (arrItem, x) => arrItem % x === 0

  for (let x = minA; x <= maxB; x++) {
    if (a.every(av => isFactorOf(av, x))) {
      if (b.every(bv => isFactorFor(bv, x))) {
        validX.push(x)
      }
    }
  }

  return validX.length
}

console.log(getTotalX([2, 4], [16, 32, 96]))
console.log(getTotalX([3, 4], [24, 48]))
