import Decimal from '../../src/decimal'

describe('Desimal class', () => {
    test.skip('Values as a numbers', () => {
        const arr = [
            { decimal: new Decimal(10.112341234), str: '10.11' },
            { decimal: new Decimal(10.0), str: '10.00' },
            { decimal: new Decimal(10.01), str: '10.01' },
            { decimal: new Decimal(0.21), str: '0.21' },
            { decimal: new Decimal(6), str: '6.00' },
            { decimal: new Decimal(), str: '0.00' },
            { decimal: new Decimal('asdfds'), str: 'NaN' },
            { decimal: new Decimal('123.1231'), str: '123.12' },
            { decimal: new Decimal('-1.1'), str: '-1.10' },
            { decimal: new Decimal(-1), str: '-1.00' },
            { decimal: new Decimal(Infinity), str: 'Infinity' },
            { decimal: new Decimal('Infinity'), str: 'Infinity' },
        ]

        arr.forEach(item => {
            expect(item.decimal.value).toBe(item.str)
        })
    })

    test('History mode', () => {
        const a = new Decimal(10.23, {
            mode: 'history',
        })

        a.add(12)
        a.add(0.22)
        a.add(213.3342234)

        console.log(a.history)

        expect(a.history.length).toBe(4)
    })
})
