/*
Requirement:
https://www.hackerrank.com/challenges/staircase/

Testcase:
Input:
6
Output:
     #
    ##
   ###
  ####
 #####
######
*/

function getLevelWithStairs(numberOfStairs, maxLevels) {
  const emptyLevel = new Array(maxLevels).fill()
  const withStairs = emptyLevel.map((_, idx) =>
    idx <= numberOfStairs ? '#' : ' '
  )

  return withStairs.reverse().join('')
}

// Complete the staircase function below.
function staircase(n) {
  const emptyStaircase = new Array(n).fill()
  const result = emptyStaircase.map((_, level) => getLevelWithStairs(level, n))

  process.stdout.write(result.join('\n'))
}

staircase(6)
