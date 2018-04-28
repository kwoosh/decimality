import * as arithmetic from './arithmetic'
import { updateHistory, decimal2number, checkIsValid } from './utils'

class Decimal {
    constructor(value = 0, mode = 'default') {
        checkIsValid(value)

        this.value = arithmetic.decimalify(Number(value))
        this.mode = mode
        this.history = []

        updateHistory({ method: 'init', values: [] }, this)
    }

    calculate(n, method) {
        checkIsValid(n)

        const values = [this.value, decimal2number(Number(n))]
        const result = arithmetic[method](...values)

        updateHistory({ method, values, result }, this)

        this.value = result

        return this
    }

    add(n) {
        return this.calculate(n, 'add')
    }

    sub(n) {
        return this.calculate(n, 'subtract')
    }

    div(n) {
        return this.calculate(n, 'divide')
    }

    mul(n) {
        return this.calculate(n, 'multiply')
    }

    get s() {
        return String(this.value.toFixed(2))
    }
}

export default Decimal
