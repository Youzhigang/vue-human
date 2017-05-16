/**
 * Lunar month 小月
 *
 * @param  {Number}     month 0 - 11
 * @return {Boolean}
 */
export function isLunarMonth (month) {
  return [3, 5, 8, 10].includes(month)
}

/**
 * Leap year 闰年
 *
 * @param  {Number}   fullYear e.g. 2017
 * @return {Boolean}
 */
export function isLeapYear (fullYear) {
  return fullYear % 4 === 0
}

/**
 * February 二月
 *
 * @param  {Number}   month 0 - 11
 * @return {Boolean}
 */
export function isFebruary (month) {
  return month === 1
}

export function formatDoubleNumber (number) {
  return number < 10 ? '0' + number : number
}

export function formatStandrad (at) {
  const fullYear = at.getFullYear()
  const month = at.getMonth() + 1
  const date = at.getDate()
  const hours = at.getHours()
  const minutes = at.getMinutes()
  const seconds = at.getSeconds()
  return `${fullYear}-${month}-${date} ${formatDoubleNumber(hours)}:${formatDoubleNumber(minutes)}:${formatDoubleNumber(seconds)}`
}