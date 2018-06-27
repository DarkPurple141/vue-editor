import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     file: {
        contents: "",
        fname: ""
     },
     config: {
        tabsize: 4,
        fontsize: "12px"
     }
  },
  getters: {
    lines({ file }) {
      return file.contents.split('\n').length
    },
    ftype({ file }) {
      try {
         return file.fname.split('.')[1] || 'md'
      } catch (e) {
         return 'md'
      }
    }
  },
  mutations: {
     EDIT({ file }, payload) {
        file.contents = payload
     },
     FNAME({ file }, payload) {
        file.fname = payload
     }
  },
  actions: {

  }
})
