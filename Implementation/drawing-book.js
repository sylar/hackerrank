/*
Requirement: 
https://www.hackerrank.com/challenges/drawing-book/

Testcase:
Input:
6
2

Output:
1
*/

/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
  const halfBook = Math.floor(n / 2)
  const isPgaeInFirstHalf = p <= halfBook

  if (isPgaeInFirstHalf) {
    return Math.floor(p / 2)
  }

  const isSecondToLast = n - p === 1

  if (isSecondToLast) {
    const isPageOdd = p % 2 !== 0

    if (isPageOdd) {
      return 1
    }
  }

  return Math.floor((n - p) / 2)
}

console.log(pageCount(6, 5))
console.log(pageCount(6, 2))
console.log(pageCount(5, 4))
