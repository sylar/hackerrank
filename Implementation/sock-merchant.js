/*
Requirement:
https://www.hackerrank.com/challenges/sock-merchant/

Testcase:
Input:
9
10 20 20 10 10 30 50 10 20

Output:
3
*/

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  const frequencies = {}

  return ar.reduce((total, item) => {
    const currentFreqOfItem = frequencies[item] || 0
    let totalPairs = total

    frequencies[item] = currentFreqOfItem + 1

    if (frequencies[item] === 2) {
      totalPairs += 1
      frequencies[item] = 0
    }

    return totalPairs
  }, 0)
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))
