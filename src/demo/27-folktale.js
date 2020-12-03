const { compose, curry } = require("folktale/core/lambda")
const { toUpper, first } = require("lodash/fp")

let f2 = curry(2, (x, y) => x + y)
console.log(f2(1, 2))
console.log(f2(1)(2))

let f = compose(toUpper, first)
console.log(f(["one", "tow"]))
