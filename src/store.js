import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     file: {
        contents: "",
        fname: "",
        output: ""
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
     },
     EVAL({ file }, payload) {
        file.output = payload
     }
  },
  actions: {
     execute({ state, commit }) {
        console.log("eval")
        try {
           const output = eval(state.file.contents)
           commit('EVAL', output)
        } catch (e) {
           commit('EVAL', e.message)
        }
     }
  }
})
