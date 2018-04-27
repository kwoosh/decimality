import { decimalify, add, subtract, divide, multiply } from './utils'
import Decimal from './decimal'

export default {
    d: (...args) => new Decimal(...args),
    Decimal,
    add,
    divide,
    multiply,
    subtract,
    decimalify,
}
