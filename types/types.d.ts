type decimalify = (value: number) => number
type add = (left: number, right: number) => number
type subtract = (left: number, right: number) => number
type divide = (left: number, right: number) => number
type multiple = (left: number, right: number) => number

type HistoryPoint = {
    date: Date
    values: number[]
    method: string
    result: number
}

interface Decimal {
    readonly history: HistoryPoint[]
    readonly s: string

    value: number
    mode: string

    calculate(numeric: number, method: string): Decimal
    add(num: number, right: number): Decimal
    sub(left: number, right: number): Decimal
    mul(left: number, right: number): Decimal
    div(left: number, right: number): Decimal
}
