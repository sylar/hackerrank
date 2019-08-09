/*
Requirements:
https://www.hackerrank.com/challenges/grading/problem

Testcases:
Input:
[73, 67, 38, 33]

Output:
[75, 67, 40, 33]
*/

function getRoundingData(lastDigit) {
  const threshhold = 3
  let diff = 10 - lastDigit
  if (lastDigit < 5) {
    diff = 5 - lastDigit
    return {
      diff,
      shouldBeRounded: diff < threshhold
    }
  }

  return {
    diff,
    shouldBeRounded: diff < threshhold
  }
}

function roundGrade(grade) {
  const lastDigit = grade % 10
  const firstDigit = parseInt(grade / 10, 10)
  const { diff, shouldBeRounded } = getRoundingData(lastDigit)

  if (shouldBeRounded) {
    return firstDigit * 10 + lastDigit + diff
  }

  return grade
}

function isBelowThreshhold(grade, treshhold) {
  return grade < treshhold
}

function gradingStudents(grades) {
  const result = grades.reduce((r, grade) => {
    if (isBelowThreshhold(grade, 38)) {
      return [...r, grade]
    }
    return [...r, roundGrade(grade)]
  }, [])

  return result
}

console.log(gradingStudents([73, 67, 38, 33]))
