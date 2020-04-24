import Vue from "vue";
import Vuex from "vuex";

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

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules
});
