import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    currentFileData: {
      file : null,
      havePassword : false,
      password : null,
      expireDateAdded : false,
      expireDate : null,
      expireCountAdded : false,
      expireCount : null,
      proceedtoUpload : false
    }

  },
  mutations: {

    setProceedToUpload(state, payload) {
      state.currentFileData.proceedtoUpload = payload
    }
    
  },
  actions: {},
  modules: {
  }
})
