const _ = require('lodash')

function pi (p) {
    console.log(p)
    return Math.PI * p * p
}

const piMemoize = _.memoize(pi)

console.log(piMemoize(3))
console.log(piMemoize(3))
console.log(piMemoize(3))