/*
Requirement:
https://www.hackerrank.com/challenges/cats-and-a-mouse/

Testcase:

Input:
2
1 2 3
1 3 2

Output:
Cat B
Mouse C
*/

// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
  const distantsFromMouse = {
    catA: Math.abs(x - z),
    catB: Math.abs(y - z)
  }

  if (distantsFromMouse.catA === distantsFromMouse.catB) {
    return 'Mouse C'
  }

  if (distantsFromMouse.catA > distantsFromMouse.catB) {
    return 'Cat B'
  }

  return 'Cat A'
}

console.log(catAndMouse(1, 2, 3))
console.log(catAndMouse(1, 3, 2))
