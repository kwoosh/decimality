declare namespace decimality {
    function decimalify(value: number): number

    function add(left: number, right: number): number
    function subtract(left: number, right: number): number
    function divide(left: number, right: number): number
    function multiple(left: number, right: number): number

    function d(...args: any[]): Decimal

    type Mode = string | 'default' | 'history'

    interface HistoryPoint {
        date: Date
        values: number[]
        method: string
        result: number
    }

    class Decimal {
        constructor(value?: number | string, mode?: Mode)

        readonly history: HistoryPoint[]

        value: number
        mode: Mode

        calc(n: number, method: string): Decimal

        add(n: number): Decimal
        sub(n: number): Decimal
        mul(n: number): Decimal
        div(n: number): Decimal

        s(): string
    }
}

export default decimality
