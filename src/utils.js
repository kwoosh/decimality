export const decimal2number = arg => (typeof arg !== 'number' ? arg.value : arg)

export const updateHistory = ({ method, values, result }, ctx) => {
    if (ctx.mode === 'history') {
        ctx.history.push({
            date: Date.now(),
            result,
            values,
            method,
        })
    }
}

export const checkIsValid = value => {
    if (!isNumber(value)) {
        throw new Error(`Passed value ${value} doesn't seems to be number-like`)
    }
}

export const isNumber = n => {
    const number = Number(n)

    if (number - number !== 0) return false

    if (number === n) return true

    if (typeof n === 'string') {
        if (number === 0 && n.trim() === '') return false
        else return true
    }

    return false
}
