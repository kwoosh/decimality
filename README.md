# decimality

Less than 3 KB size library for decimal arithmetic.

## Road Map

*   [Decimalify](#decimalify)
*   [Decimal as a Type](#decimal-as-a-Type)
*   [Decimal Arithmetic](#decimal-arithmetic)

### Decimalify

Convert number to decimal

```js
import { decimalify } from 'decimality'

decimalify(5.982173) // 5.98
decimalify(43.444) // 43.44
decimalify(12.446) // 12.45
```

### Decimal Arithmetic

Those methods allways return a number with decimal fraction

#### add(n: _number_)

```js
import { add } from 'decimality'

add(3.45, 2.1) // 5.55
add(120.23, 200) // 320.23
add(4, 6) // 10
```

#### subtract(n: _number_)

```js
import { subtract } from 'decimality'

subtract(3.45, 2.1) // 1.35
subtract(120.23, 200) // -79.77
subtract(4, 6) // -2
```

#### multiply(n: _number_)

```js
import { multiply } from 'decimality'

multiply(3.45, 2.1) // 7.25
multiply(120.23, 200) // 24046
multiply(4, 6) // 24
```

#### divide(n: _number_)

```js
import { divide } from 'decimality'

divide(3.45, 2.1) // 1.64
divide(120.23, 200) // 0.6
divide(4, 6) // 0.67
```

### Decimal as a type

```js
import { Decimal } from 'decimality'

const decimal = new Decimal(5.982173)

decimal.value // 5.98
```

#### Decimal.calc(n: _number_, method: _string_)

```js
const n = 123.234

decimal.calc(n, 'arithmetic method')
```

Allowed arithmetic methods:

*   add
*   subtract
*   divide
*   multiply

Aliaces

```js
const n = 123.234

decimal.add(n) === decimal.calc(n, 'add')
decimal.sub(n) === decimal.calc(n, 'subtract')
decimal.div(n) === decimal.calc(n, 'divide')
decimal.mul(n) === decimal.calc(n, 'multiply')
```

#### Decimal.s()

Returns a string value of Decimal.

> Allways 2 numbers after dot.

```js
import { Decimal } from 'decimality'

const decimal = new Decimal(5.1)

decimal.s() // 5.10
```

#### History mode

If set _Decimal.historyMode_ to `true` all your operations will be stored in _Decimal.history_ array

```js
import { Decimal } from 'decimality'

new Decimal(10.23, true)
// or
const d = new Decimal(10.23)

d.historyMode = true
```

What _history_ looks like:

```js
import { Decimal } from 'decimality'

const decimal = new Decimal(10.23, true)

decimal.add(12)
decimal.add(0.22)
decimal.add(213.3342234)

// decimal.history === HISTORY_EXAMPLE

const HISTORY_EXAMPLE = [
    {
        date: '2018-05-09T13:39:33.338Z',
        method: 'initial',
        values: [],
        result: 10.23,
    },
    {
        date: '2018-05-09T13:39:33.341Z',
        method: 'add',
        values: [10.23, 12],
        result: 22.23,
    },
    {
        date: '2018-05-09T13:39:33.341Z',
        method: 'add',
        values: [22.23, 0.22],
        result: 22.45,
    },
    {
        date: '2018-05-09T13:39:33.341Z',
        method: 'add',
        values: [22.45, 213.3342234],
        result: 235.78,
    },
]
```
