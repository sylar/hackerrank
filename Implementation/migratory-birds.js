/*
Requirement: 
https://www.hackerrank.com/challenges/migratory-birds

Testcase:

Input:
6
1 4 4 4 5 3

Output:
4
*/

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
  const maxFreqObj = {
    freq: 0,
    value: 0
  }
  const obj = arr.reduce((freqObj, item) => {
    const currentFreq = freqObj[item] || 0
    const newFrequency = currentFreq + 1

    if (maxFreqObj.freq === newFrequency) {
      if (item < maxFreqObj.value) {
        maxFreqObj.freq = newFrequency
        maxFreqObj.value = item
      }
    } else {
      if (newFrequency > maxFreqObj.freq) {
        maxFreqObj.freq = newFrequency
        maxFreqObj.value = item
      }
    }

    return {
      ...freqObj,
      [item]: currentFreq + 1
    }
  }, {})

  return maxFreqObj.value
}

console.log(migratoryBirds([1, 4, 4, 4, 1, 5, 3]))
