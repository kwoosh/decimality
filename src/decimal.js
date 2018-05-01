import * as arithmetic from './arithmetic'

class Decimal {
    constructor(value = 0, mode = 'default') {
        this.value = arithmetic.decimalify(Number(value))
        this.mode = mode
        this.history = []

        this.updateHistory({ method: 'initial', values: [], result: this.value })
    }

    calc(n, method) {
        const operand = n instanceof Decimal ? n.value : n
        const values = [this.value, operand]
        const result = arithmetic[method](...values)

        this.updateHistory({ method, values, result })

        this.value = result

        return this
    }

    updateHistory(opts) {
        if (this.mode === 'history') this.history.push({ date: new Date(Date.now()), ...opts })
    }

    get s() {
        return String(this.value.toFixed(2))
    }

    add(n) {
        return this.calc(n, 'add')
    }

    sub(n) {
        return this.calc(n, 'subtract')
    }

    div(n) {
        return this.calc(n, 'divide')
    }

    mul(n) {
        return this.calc(n, 'multiply')
    }
}

export default Decimal
