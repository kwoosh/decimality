import * as utils from './utils'

const UPDATE_HISTORY = Symbol('update-history')
const HISTORY_LIST = Symbol('history-list')

class Decimal {
    /**
     * @class Create a Decimal.
     * @param {(number | string)} value
     * @param {Object} options
     * @method add sdfsd
     */
    constructor(value = 0, { mode = 'default' }) {
        this.value = utils.decimalify(Number(value))

        this.mode = mode

        this[HISTORY_LIST] = []
        this[UPDATE_HISTORY]('init', [])
    }

    /**
     * Get decimal value as a string
     */
    get s() {
        return String(this.value.toFixed(2))
    }

    /**
     * Returns operations history
     * @returns {Array<HistoryPoint>}
     */
    get history() {
        return this[HISTORY_LIST]
    }

    /**
     * @param {(number | Decimal)} numeric
     * @param {string} method
     * @returns {Decimal}
     */
    calculate(numeric, method) {
        numeric = numeric instanceof Decimal ? numeric.value : numeric
        const values = [this.value, numeric]

        this.value = utils[method](...values)
        this[UPDATE_HISTORY](method, values)

        return this
    }

    /**
     * @param {number} num
     * @returns {Decimal}
     */
    add(num) {
        return this.calculate(num, 'add')
    }

    /**
     * @param {number} num
     * @returns {Decimal}
     */
    sub(num) {
        return this.calculate(num, 'subtract')
    }

    /**
     * @param {number} num
     * @returns {Decimal}
     */
    div(num) {
        return this.calculate(num, 'divide')
    }

    /**
     * @param {number} num
     * @returns {Decimal}
     */
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

/**
 * @typedef  HistoryPoint
 * @type {Object}
 * @property {Date} date - Date of creation
 * @property {number} result - Result of calculation
 * @property {string} method - Arithmetic method
 * @property {Array<number>} values - Left and right operands
 */

export default Decimal
