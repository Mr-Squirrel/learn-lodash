/**
 *
 * @param
 * @param
 * @returns
 */

export default function isNaN(value) {
  return typeof value === 'symbol' ? false : `${value}` === 'NaN'
}
