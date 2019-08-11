/*
Requirements:
https://www.hackerrank.com/challenges/apple-and-orange/problem?h_r=next-challenge&h_v=zen

Testcase:
Input:
7, 11, 5, 15,3, 2, [-2, 2, 1],[5, -6]

Output:
1
1

Params:
s: integer, starting point of Sam's house location.
t: integer, ending location of Sam's house location.
a: integer, location of the Apple tree.
b: integer, location of the Orange tree.
apples: integer array, distances at which each apple falls from the tree.
oranges: integer array, distances at which each orange falls from the tree.
*/

function getFruitFromSamsHouse(houseLeft, houseRight, fruitArray) {
  return fruitArray.reduce((count, fruit) => {
    const fellOnHouse = fruit >= houseLeft && fruit <= houseRight
    if (fellOnHouse) {
      return count + 1
    }

    return count
  }, 0)
}

function getDistanceFromHouse(fruitLocation, treeLocation) {
  return fruitLocation + treeLocation
}

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const applesLocations = apples.map(apple => getDistanceFromHouse(apple, a))
  const orangesLocations = oranges.map(orange =>
    getDistanceFromHouse(orange, b)
  )
  const applesOnHouse = getFruitFromSamsHouse(s, t, applesLocations)
  const orangesOnHouse = getFruitFromSamsHouse(s, t, orangesLocations)

  console.log(applesOnHouse)
  console.log(orangesOnHouse)
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])
