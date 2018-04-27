import * as utils from './utils'

class Decimal {
    constructor(value, { mode = 'default' }) {
        this.value = utils.decimalify(Number(value))
        this.mode = mode
        this.history = []

        updateHistory('init', [], this)
    }

    calculate(numeric, method) {
        numeric = numeric instanceof Decimal ? numeric.value : numeric
        const values = [this.value, numeric]

        this.value = utils[method](...values)
        updateHistory(method, values, this)

        return this
    }

    add(num) {
        return this.calculate(num, 'add')
    }

    sub(num) {
        return this.calculate(num, 'subtract')
    }

    div(num) {
        return this.calculate(num, 'divide')
    }

    mul(num) {
        return this.calculate(num, 'multiply')
    }

    s() {
        return String(this.value.toFixed(2))
    }
}

const updateHistory = (method, values, entity) => {
    if (entity.mode === 'history') {
        entity.history.push({
            date: Date.now(),
            result: entity.value,
            values,
            method,
        })
    }
}

export default Decimal
