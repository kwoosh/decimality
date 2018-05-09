import * as arithmetic from './arithmetic'

class Decimal {
    constructor(value = 0, mode = 'default') {
        this.value = arithmetic.decimalify(Number(value))
        this.mode = mode
        this.history = []

        this.updateHistory({ method: 'initial', values: [], result: this.value })
    }

    calc(n, method) {
        const operand = n instanceof Decimal ? n.value : Number(n)
        const values = [this.value, operand]
        const result = arithmetic[method](...values)

        if (this.mode === 'history') this.updateHistory({ method, values, result })

        this.value = result

        return this
    }

    updateHistory(opts) {
        this.history.push({ date: new Date(Date.now()), ...opts })
    }

    add = n => this.calc(n, 'add')
    sub = n => this.calc(n, 'subtract')
    div = n => this.calc(n, 'divide')
    mul = n => this.calc(n, 'multiply')

    s = () => String(this.value.toFixed(2))
}

export default Decimal
