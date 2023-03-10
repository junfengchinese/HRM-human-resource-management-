import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import '@/styles/element-variables.scss'
// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import Components from './components'
import './icons' // icon
import './permission' // permission control
// import './utils/error-log' // error log
import * as filter from '@/filters'
import * as directives from '@/directive/index'
import mixin from '@/layout/mixin/index'

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

// 全局混入一个重置表单的方法
Vue.mixin(mixin)

// register global utility filters

Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})

Vue.config.productionTip = false
Vue.use(Components)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

