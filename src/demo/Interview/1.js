// 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b,...,a+nb 的时间，然后写一个 myClear，停止上面的 mySetInterVal
function mySetInterVal(fn, a, b) {
  let timeCount = 0
  let timer
  const loop = () => {
    timer = setTimeout(() => {
      fn()
      timeCount++
      loop()
    }, a + timeCount * b)
  }
  loop()
  return () => clearTimeout(timer)
}
const timerClear = mySetInterVal(
  () => {
    console.log('test')
  },
  1000,
  500
)
timerClear()
