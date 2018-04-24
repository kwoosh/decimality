import { decimalify, add, subtract, divide, multiply } from '../../src/utils'
import { values, operations } from './data'

describe('Util methods', () => {
    test('decimalify', () => {
        values.forEach(v => {
            const entry = String(decimalify(v.num).toFixed(2))
            const result = v.str

            expect(entry).toBe(result)
        })
    })

    test('add', () => {
        operations.forEach(item => {
            expect(add(...item.nums)).toBe(item.added)
        })
    })

    test('subtract', () => {
        operations.forEach(item => {
            expect(subtract(...item.nums)).toBe(item.subtracted)
        })
    })

    test('divide', () => {
        operations.forEach(item => {
            expect(divide(...item.nums)).toBe(item.divided)
        })
    })

    test('multiply', () => {
        operations.forEach(item => {
            expect(multiply(...item.nums)).toBe(item.multiplied)
        })
    })
})
