import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     file: {
        contents: ""
     }
  },
  getters: {
    // eslint-disable-next-line
    lines({ state }) {
      // eslint-disable-next-line
      return file.contents.split('\n').length
    }
  },
  mutations: {
     EDIT(state, payload) {
        state.file.contents = payload
     }
  },
  actions: {

  }
})
