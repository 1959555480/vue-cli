import Toast from './Toast'

const commonComs = {
  Toast
}
const install = (Vue) =>{
  if(install.installed) return
  install.installed = true 
  // 遍历公共组件
  Object.keys(commonComs).forEach(key => Vue.use(commonComs[key]))
  // Object.keys(components).forEach(key => Vue.component(key, components[key]))
}
export default {
  install
}