// Type definitions for decimality 0.0.1
// Project: decimality
// Definitions by: kwoosh <tobirawork@gmail.com>

export function decimalify(value: number): number
export function add(left: number, right: number): number
export function subtract(left: number, right: number): number
export function divide(left: number, right: number): number
export function multiple(left: number, right: number): number
export function d(args: any[]): Decimal

export type HistoryPoint = {
    date: Date
    values: number[]
    method: string
    result: number
}

export interface Decimal {
    readonly history: HistoryPoint[]

    value: number | string | 0
    mode: string | 'default'

    calculate(numeric: number, method: string): Decimal
    add(num: number, right: number): Decimal
    sub(left: number, right: number): Decimal
    mul(left: number, right: number): Decimal
    div(left: number, right: number): Decimal
    s(): string
}
