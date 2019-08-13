/*
Requirement:
https://www.hackerrank.com/challenges/bon-appetit/

Testcase:
Inout:
4 1
3 10 2 9
12

Output:
5

Inout:
4 1
3 10 2 9
7

Output:
Bon Appetit
*/

// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
  const commonAmount = bill.reduce((sum, item, index) => {
    if (index === k) {
      return sum
    }

    return sum + item
  }, 0)

  const commonAmountPerUser = commonAmount / 2
  const paymentDiff = Math.abs(commonAmountPerUser - b)

  return paymentDiff === 0 ? 'Bon Appetit' : paymentDiff
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12))
console.log(bonAppetit([3, 10, 2, 9], 1, 7))
