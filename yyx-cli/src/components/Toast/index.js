import ToastComponent from './Toast.vue'
import Vue from 'vue'

// 利用 Vue.extend 构造器把toast组件挂载到vue实例下
let Toast = Vue.extend(ToastComponent)

let instance
const toast = function(options){
  options = options || {}
  instance = new Toast({
    data: options
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  return instance.vm
}
export default toast
