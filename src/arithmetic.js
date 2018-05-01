export const decimalify = value => Math.round(value * 100.0) / 100

export const add = (left, right) => decimalify(left + right)

export const subtract = (left, right) => decimalify(left - right)

export const divide = (left, right) => Math.round(left * 100.0 / right) / 100

export const multiply = (left, right) => Math.round(left * right * 100.0) / 100
