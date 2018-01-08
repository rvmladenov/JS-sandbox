import Vue from 'vue'
import App from './App.vue'

Vue.directive('myon', {
  bind(el, binding, vnode) {
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
