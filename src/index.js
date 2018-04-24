import { decimalify, add, subtract, divide, multiply } from './utils'
import Decimal from './decimal'

export default {
    d: (...arg) => new Decimal(...arg),
    Decimal,
    add,
    divide,
    multiply,
    subtract,
    decimalify,
}
