const _ = require('lodash')

const match = _.curry(function(reg, str) {
    return str.match(reg)
})

const hasSpace = match(/\s+/g)
const hasNum = match(/\d+/g)

const filter = _.curry(function(func, array) {
    return array.filter(func)
})

const findNum = filter(hasNum)

const arr = ['123ab', 'asfas2', '经济技术1', 'sfaj@@@', '计算机房间啊']

console.log(filter(hasNum, arr))
console.log(findNum(arr))