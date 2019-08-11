/*
Requirement: 
https://www.hackerrank.com/challenges/breaking-best-and-worst-records/

Testcase:
Input:
9
10 5 20 20 4 5 2 25 1

Output:
2 4 

Input:
10
3 4 21 36 10 28 35 5 24 42

Output:
4 0
*/

// Complete the breakingRecords function below.
function breakingRecords(scores) {
  let minScore = scores[0]
  let maxScore = scores[0]
  const counter = {
    minScore: 0,
    maxScore: 0
  }

  scores.forEach(score => {
    if (minScore < score) {
      minScore = score
      counter.minScore = counter.minScore + 1
    }

    if (maxScore > score) {
      maxScore = score
      counter.maxScore = counter.maxScore + 1
    }
  })

  return [counter.minScore, counter.maxScore]
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]))
