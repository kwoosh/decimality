/**
 * Converts any number to number with decimal fraction
 * @param {number} value
 */
export const decimalify = value => Math.round(value * 100.0) / 100

/**
 * Returns addition result of two numbers
 * @param {number} left
 * @param {number} right
 */
export const add = (left, right) => decimalify(left + right)

/**
 * Returns subtraction result of two numbers
 * @param {number} left
 * @param {number} right
 */
export const subtract = (left, right) => decimalify(left - right)

/**
 * Returns division result of two numbers
 * @param {number} left
 * @param {number} right
 */
export const divide = (left, right) => Math.round(left * 100.0 / right) / 100

/**
 * Returns multiplication result of two numbers
 * @param {number} left
 * @param {number} right
 */
export const multiply = (left, right) => Math.round(left * right * 100.0) / 100
