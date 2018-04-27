import * as arithmetic from './arithmetic'
import { updateHistory } from './utils'

class Decimal {
    constructor(value, mode = 'default') {
        this.value = arithmetic.decimalify(Number(value))
        this.mode = mode
        this.history = []

        updateHistory({ method: 'init', values: [] }, this)
    }

    calculate(numeric, method) {
        numeric = numeric instanceof Decimal ? numeric.value : numeric

        const values = [this.value, numeric]
        const result = arithmetic[method](...values)

        updateHistory({ method, values, result }, this)

        this.value = result

        return this
    }

    add(numeric) {
        return this.calculate(numeric, 'add')
    }

    sub(numeric) {
        return this.calculate(numeric, 'subtract')
    }

    div(numeric) {
        return this.calculate(numeric, 'divide')
    }

    mul(numeric) {
        return this.calculate(numeric, 'multiply')
    }

    s() {
        return String(this.value.toFixed(2))
    }
}

export default Decimal
