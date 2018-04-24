import * as utils from './utils'

const UPDATE_HISTORY = Symbol('update-history')
const HISTORY_LIST = Symbol('history-list')

class Decimal {
    constructor(value = 0, { mode = 'default' }) {
        this.value = utils.decimalify(Number(value))

        this.mode = mode

        this[HISTORY_LIST] = []
        this[UPDATE_HISTORY]('init', [])
    }

    get s() {
        return String(this.value.toFixed(2))
    }

    get history() {
        return this[HISTORY_LIST]
    }

    calculate(numeric = 0, method) {
        numeric = numeric instanceof Decimal ? numeric.value : numeric
        const values = [this.value, numeric]

        this.value = utils[method](...values)
        this[UPDATE_HISTORY](method, values)

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

    [UPDATE_HISTORY](method, values) {
        if (this.mode === 'history') {
            this[HISTORY_LIST].push({
                date: Date.now(),
                result: this.value,
                values,
                method,
            })
        }
    }
}

export default Decimal
