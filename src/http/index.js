import api from './api'

const install = Vue => {
  if(install.installed)
    return;
  install.installed = true;
  Object.defineProperties(Vue.prototype,{
    //此处挂载在vue原型的$api对象上
    $api: {
      get(){
        return api
      }
    }
  })
}

export default install