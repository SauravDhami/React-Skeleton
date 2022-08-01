/**
 * Checking value is undefined or not
 *
 * @param value any
 * @returns boolean
 */
function isUndefined(val: any): boolean {
  return typeof val === 'undefined'
}

/**
 * Checking value is valid string or not
 *
 * @param value any
 * @returns boolean
 */
function isString(value: any): boolean {
  return typeof value === 'string' && value.length > 0
}

export { isString, isUndefined }
