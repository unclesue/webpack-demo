import '@/styles/style.scss'

if (process.env.NODE_ENV === 'development') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

require('./demo/1-2-14-generator-promise')
require('./demo/ts/2.ts')
