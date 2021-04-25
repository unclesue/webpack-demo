import { init } from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h'

const patch = init([])

let vnode = h('ul', [
  h('li', '首页'),
  h('li', '新闻'),
  h('li', '论坛'),
])

let app = document.querySelector('#app')

let oldVnode = patch(app, vnode)

vnode = h('ul', [
  h('li', '首页'),
  h('li', '论坛'),
  h('li', '新闻'),
])

patch(oldVnode, vnode)