import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     file: ""
  },
  mutations: {
     EDIT(state, payload) {
        state.file = payload
     }
  },
  actions: {

  }
})
