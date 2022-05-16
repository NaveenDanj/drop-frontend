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
    },
    uploadedFile : null

  },
  mutations: {

    setProceedToUpload(state, payload) {
      state.currentFileData.proceedtoUpload = payload
    },

    setFileParameters(state , payload){
      state.currentFileData.havePassword = payload.havePassword;
      state.currentFileData.password = payload.password;
      state.currentFileData.expireDateAdded = payload.expireDate;
      state.currentFileData.expireDate = payload.expireDate;
      state.currentFileData.expireCountAdded = payload.expireCountAdded;
      state.currentFileData.expireCount = payload.expireCount;
    },

    setUploadedFile(state, payload) {
      state.uploadedFile = payload;
    }
    
  },
  actions: {},
  modules: {
  }
})
