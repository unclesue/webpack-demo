import request from '@/api'

// function ajax(url) {
//   return new Promise((resolve, reject) => {
//     var xhr = new XMLHttpRequest()
//     xhr.open('get', url)
//     xhr.responseType = 'json'
//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         resolve(xhr.response)
//       } else {
//         reject(new Error(xhr.statusText))
//       }
//     }
//     xhr.send()
//   })
// }

function* main() {
  try {
    const articles = yield request('/article/list')
    console.log(articles)

    const detail = yield request({ url: '/article/detail', params: { id: 1 }})
    console.log(detail)
    
    const pv = yield request({ url: '/article/p', params: { id: 1 }})
    console.log(pv)
  } catch (e) {
    console.log(e)
  }
}

function co(generator) {
  const g = generator()

  function handleResult(result) {
    if (result.done) return
    result.value.then(
      (data) => {
        handleResult(g.next(data))
      },
      (error) => {
        g.throw(error)
      }
    )
  }

  handleResult(g.next())
}

co(main)
