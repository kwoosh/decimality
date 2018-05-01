import { decimalify, add, subtract, divide, multiply } from './arithmetic'
import Decimal from './decimal'

export default {
    d: (...args) => new Decimal(...args),

    Decimal,
    decimalify,

    add,
    divide,
    multiply,
    subtract,
}
