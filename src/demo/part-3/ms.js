const arr = [10, 6, 4, 5, 7]
const findNext = (val, arr) => {
  arr.sort((a, b) => (a - b))
  const max = arr.findIndex(item => item === val)
  if (max !== -1) {
    return arr[max]
  }
}
console.log(findNext(4, arr))