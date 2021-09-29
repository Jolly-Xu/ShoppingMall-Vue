import { createStore } from 'vuex'
// 创建一个新的 store 实例
export default  createStore({
  state () {
    return {
        userinfo:{}
    }
  },    
  mutations: {
    userinfo(state,newvalue){
        state.userinfo = newvalue
    }
  }
})