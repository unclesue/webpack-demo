let _Vue = null

export default class VueRouter {
  static install (Vue) {
    if (VueRouter.install.installed) return
    VueRouter.install.installed = true
    _Vue = Vue
    _Vue.mixin({
      beforeCreate () {
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router
          this.$options.router.init()
        }
      }
    })
  }

  constructor (options) {
    this.options = options
    this.routeMap = {}
    this.data = _Vue.observable({ current: '/' })
  }

  ceeateRouteMap () {
    this.options.routes.forEach(route => {
      this.routeMap[route.path] = route.component
    })
  }

  init () {
    this.ceeateRouteMap()
    this.initComponents(_Vue)
    this.initEvent()
  }

  initComponents (Vue) {
    Vue.component('router-link', {
      props: {
        to: String
      },
      // template: '<a :href="to"><slot /></a>'
      render (h) {
        return h('a', {
          attrs: { href: this.to },
          on: { click: this.clickHandle }
        }, [this.$slots.default])
      },
      methods: {
        clickHandle (e) {
          history.pushState({}, '', this.to)
          this.$router.data.current = this.to
          e.preventDefault()
        }
      }
    })

    const self = this
    Vue.component('router-view', {
      render (h) {
        const component = self.routeMap[self.data.current]
        return h(component)
      }
    })
  }

  initEvent () {
    window.addEventListener('popstate', () => {
      this.data.current = window.location.pathname
    })
  }
}
