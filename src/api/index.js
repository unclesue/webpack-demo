import axios from 'axios'

const service = axios.create({
  timeout: 5000,
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // if (store.getters.token) {
    //   config.headers["X-Token"] = getToken();
    // }
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data

    if (res.code !== 200) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
