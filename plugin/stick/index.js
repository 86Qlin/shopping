import sticking from './stick.vue'

const stick = {
  install: function(Vue) {
    Vue.component('Stick', sticking)
  }
}

export default stick