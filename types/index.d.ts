// Type definitions for decimality 0.0.1
// Project: decimality
// Definitions by: kwoosh <tobirawork@gmail.com>

export function decimalify(value: number): number
export function add(left: number, right: number): number
export function subtract(left: number, right: number): number
export function divide(left: number, right: number): number
export function multiple(left: number, right: number): number
export function d(args: any[]): Decimal

export type Mode = string | 'default' | 'history'
export type HistoryPoint = {
    date: Date
    values: number[]
    method: string
    result: number
}

export declare class Decimal {
    constructor(value: number | string | 0, mode?: Mode)

    readonly history: HistoryPoint[]

    value: number
    mode: Mode

    s(): string
    add(numeric: number): Decimal
    sub(numeric: number): Decimal
    mul(numeric: number): Decimal
    div(numeric: number): Decimal
    calculate(numeric: number, method: string): Decimal
}
