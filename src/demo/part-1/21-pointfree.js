const fp = require('lodash/fp')

// const f = fp.flowRight(fp.replace(/\s+/g, '_'), str => str.toLowerCase())
const f = fp.flowRight(fp.replace(/\s+/g, '_'), fp.toLower)

console.log(f('HEllo    world'))
