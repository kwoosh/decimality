import { decimalify, add, subtract, divide, multiply } from './utils'
import Decimal from './decimal'

export default {
    /**
     * Alias for ***new Decimal()***
     */
    d: (...args) => new Decimal(...args),
    Decimal,
    add,
    divide,
    multiply,
    subtract,
    decimalify,
}
