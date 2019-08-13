/*
Requirement:
https://www.hackerrank.com/challenges/day-of-the-programmer/

Testcase:

Input:
2016

Output:
12.09.2016


Input:
1800

Output:
12.09.1800
*/

const calendars = {
  byMonth: {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  },
  byMaxDays: {
    0: 31,
    1: {
      gregorian: {
        leap: 29,
        normal: 28,
        start: 1
      },
      julian: {
        leap: 29,
        normal: 28,
        start: 1
      },
      transition: {
        normal: 15,
        start: 14
      }
    },
    2: 31,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31
  },
  byType: [
    {
      type: 'julian',
      start: 1700,
      end: 1917
    },
    {
      type: 'gregorian',
      start: 1919
    },
    {
      type: 'transition',
      start: 1918,
      end: 1918,
      byMonth: {
        1: {
          start: 14,
          end: 28
        }
      }
    }
  ],
  byLeapYearRules: {
    julian: year => year % 4 === 0,
    gregorian: year => {
      const isDivisibleBy400 = year % 400 === 0
      const isDivisibleBy4 = year % 4 === 0
      const isDivisibleBy100 = year % 100 === 0

      return isDivisibleBy400 || (isDivisibleBy4 && !isDivisibleBy100)
    },
    transition: year => false
  }
}

function isYearLeap(year, yearType, calendarMap) {
  return calendarMap[yearType](year)
}

function getYearType(year, calendarMap) {
  const type = calendarMap.reduce((result, details) => {
    if (year >= details.start) {
      if (details.end && year <= details.end) {
        return details.type
      } else {
        return 'gregorian'
      }
    }
    return result
  }, '')

  return type
}

function getDateFromDayNumber(target, calendarMap, yearType, isLeapYear, year) {
  const result = Object.keys(calendarMap.byMonth).reduce(
    (resultDate, item) => {
      const monthDetails = calendarMap.byMaxDays[item]
      let newDate = {
        ...resultDate,
        year
      }
      const dateDiff = newDate.total - target
      if (dateDiff <= 0) {
        newDate.diff = dateDiff
        newDate.month = item
        if (typeof monthDetails === 'object') {
          if (!isLeapYear) {
            newDate.total += monthDetails[yearType].normal
          } else {
            newDate.total += monthDetails[yearType].leap
          }
        } else {
          newDate.total += monthDetails
        }
      } else {
        newDate.dateOfTheMonth = Math.abs(resultDate.diff)

        if (yearType === 'transition') {
          if (newDate.dateOfTheMonth < 14) {
            newDate.dateOfTheMonth +=
              newDate.dateOfTheMonth + monthDetails.transition.start
          }
        }
      }
      return newDate
    },
    { total: 0 }
  )

  const getCorrectMonth = () => {
    const temp = parseInt(result.month, 10) + 1
    return `${temp < 10 ? 0 : ''}${temp}`
  }
  return `${result.dateOfTheMonth}.${getCorrectMonth()}.${result.year}`
}

// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
  const programmerDay = 256
  const yearParsed = parseInt(year, 10)
  const yearType = getYearType(yearParsed, calendars.byType)
  const isLeapYear = isYearLeap(yearParsed, yearType, calendars.byLeapYearRules)
  let result = getDateFromDayNumber(
    programmerDay,
    calendars,
    yearType,
    isLeapYear,
    year
  )
  return result
}

console.log(dayOfProgrammer(2016))
console.log(dayOfProgrammer(2017))
console.log(dayOfProgrammer(1800))
