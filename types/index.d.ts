export function decimalify(value: number): number
export function add(left: number, right: number): number
export function subtract(left: number, right: number): number
export function divide(left: number, right: number): number
export function multiple(left: number, right: number): number
export function d(...args: any[]): Decimal

export type Mode = string | 'default' | 'history'

export type HistoryPoint = {
    date: Date
    values: number[]
    method: string
    result: number
}

export declare class Decimal {
    constructor(value?: number | string, mode?: Mode)

    readonly history: HistoryPoint[]
    readonly s: string

    value: number
    mode: Mode

    add(n: number): Decimal
    sub(n: number): Decimal
    mul(n: number): Decimal
    div(n: number): Decimal
    calc(n: number, method: string): Decimal
}
