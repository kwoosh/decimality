import Decimal from '../../src/decimal'
import { isNumber } from '../../src/utils'

describe('Desimal class', () => {
    test('History mode', () => {
        const d = new Decimal(10.23, 'history')

        d.add(12)
        d.add(0.22)
        d.add(213.3342234)

        expect(d.history).toHaveLength(4)
    })

    test('Arithmetic methos', () => {
        const d = new Decimal(10.23, 'history')
        const methods = ['add', 'sub', 'div', 'mul']

        methods.forEach(method => {
            expect(d[method](3) instanceof Decimal).toBeTruthy()
        })
    })

    test('Method Decimal.s must return a number-like string', () => {
        const d = new Decimal(10.239)

        expect(isNumber(d.s)).toBeTruthy()
    })

    test("Throw error if passed value isn't valid", () => {
        expect(() => {
            const dec = new Decimal('sdfa')
            dec.add(12)
        }).toThrow()
    })
})
