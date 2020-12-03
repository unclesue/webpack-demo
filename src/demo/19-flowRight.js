const _ = require('lodash')

const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = str => str.toUpperCase()

const f = _.flowRight(toUpper, first, reverse)
console.log(f(['one', 'two', 'three']))