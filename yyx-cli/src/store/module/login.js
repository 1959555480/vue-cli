const login = {
  namespaced: true,
  state:{
    name: 'login'
  },
  mutations:{
    setName(state,data){
      state.name = data
      console.log("mutation1",state,data)
    }
  },
  actions:{
    // rootState 访问根state 在actions里
    getGlobalName({state,rootState}){
      console.log("mutation2",state.name,rootState)
    }
  }
}
export default login