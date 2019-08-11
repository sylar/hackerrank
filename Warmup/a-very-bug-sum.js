/*
Requirement:
https://www.hackerrank.com/challenges/a-very-big-sum

Testcase:
5
1000000001 1000000002 1000000003 1000000004 1000000005
*/

function numberToArrayReversed(number) {
  return `${number}`.split('').reverse()
}

function getLongerArray(a, b) {
  if (a.length > b.length) {
    return 1
  }

  return -1
}

function sum2BigNumbers(sum, number) {
  const numberArr = numberToArrayReversed(number)
  const sumArr = sum ? numberToArrayReversed(sum) : [0]
  const ref = getLongerArray(numberArr, sumArr) === -1 ? sumArr : numberArr
  const n = getLongerArray(numberArr, sumArr) === -1 ? numberArr : sumArr

  let hasExtraOne = false

  const result = ref.reduce((resultSum, el, idx) => {
    const nNumber = n[idx] || 0
    let tempSum = parseInt(el) + parseInt(nNumber)
    if (hasExtraOne) {
      tempSum++
      hasExtraOne = false
    }

    if (tempSum > 9) {
      hasExtraOne = true
      const digit = tempSum % 10
      resultSum.push(tempSum % 10)
    } else {
      resultSum.push(tempSum)
    }

    return resultSum
  }, [])

  if (hasExtraOne) {
    result.push(1)
  }

  return result.reverse().join('')
}

function aVeryBigSum(ar) {
  const sum = ar.reduce((sum, el) => {
    const tempSum = sum2BigNumbers(sum, el)

    return tempSum
  }, 0)

  return sum
}

console.log(
  aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
)
