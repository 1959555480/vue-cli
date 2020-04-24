import Vue from "vue";
import Vuex from "vuex";

// 数据持久化
import createPersistedState from "vuex-persistedstate";

// store 模块化
import login from './module/login'
import home from './module/home'

Vue.use(Vuex);

const state ={
  name: 'index'
}
const mutations ={}
const actions ={}

const modules ={
  login,home
}

// 指定持久化存储数据
const vuexPersisteed = new createPersistedState({
  key:'YYX',
  reducer(state){
    return {
      userName: state.login.name,//只存modules login的name
      userName2: state.home.name,//只存modules home的name
      userName3: state.name//只存index的name
    }
  }
})


export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  plugins:[vuexPersisteed]
});
