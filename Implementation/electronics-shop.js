/*
Requirements:
https://www.hackerrank.com/challenges/electronics-shop

Testcase:
Input
10 2 3
3 1
5 2 8

Output:
9

Input: 
5 1 1
4
5

Output:
-1
*/

/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
  const sortedDrives = drives.sort((a, b) => {
    return a - b
  })
  const sortedKeyboards = keyboards.sort((a, b) => {
    return b - a
  })

  let maxSpent = -1

  sortedDrives.forEach(drive => {
    sortedKeyboards.forEach(kb => {
      const tempSum = drive + kb

      if (tempSum <= b) {
        if (tempSum >= maxSpent) {
          maxSpent = tempSum
        }
      }
    })
  })

  return maxSpent
}
console.log(getMoneySpent([4], [5], 5))
