export function updateHistory({ method, values, result }, ctx) {
    if (ctx.mode === 'history') {
        ctx.history.push({ date: Date.now(), result, values, method })
    }
}
