import Decimal from '../../src/decimal'

describe('Desimal class', () => {
    test('History mode', () => {
        const a = new Decimal(10.23, 'history')

        a.add(12)
        a.add(0.22)
        a.add(213.3342234)

        expect(a.history.length).toBe(4)
    })
})
