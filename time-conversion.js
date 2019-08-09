/*
Requirements:
https://www.hackerrank.com/challenges/time-conversion

Testcase:
Intput:
07:05:45PM

Output:
19:05:45
*/

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
  const regexp = /(AM|PM)|(\d+)/g
  const timeArr = s.match(regexp)
  const isPM = timeArr.includes('PM')
  const hour = parseInt(timeArr[0], 10)
  let newTimeArr = []
  if (hour <= 12 && !isPM) {
    const newHour = hour + 12 === 24 ? '00' : `0${hour}`
    newTimeArr = [`${newHour}`, timeArr[1], timeArr[2]]
  } else {
    const newHour = hour + 12 === 24 ? '12' : hour + 12
    newTimeArr = [newHour, timeArr[1], timeArr[2]]
  }

  return newTimeArr.join(':')
}

console.log(timeConversion('07:05:45PM'))
