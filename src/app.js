// import '@/styles/style.scss'
import '@babel/polyfill'

if (process.env.NODE_ENV === 'development') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

require('./demo/g6/index')