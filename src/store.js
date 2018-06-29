import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// eslint-disable-next-line
const logger = console.log

// eslint-disable-next-line
console.log = function(value)
{
    logger(value)
    return value;
}

export default new Vuex.Store({
  state: {
     file: {
        contents: "",
        fname: "",
        output: ""
     },
     config: {
        tabsize: 4,
        fontsize: "12px",
     }
  },
  getters: {
    lines({ file }) {
      return file.contents.split('\n').length
    },
    ftype({ file }) {
      try {
         return file.fname.split('.')[1] || 'text'
      } catch (e) {
         return 'text'
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
        try {
           const output = eval(state.file.contents)
           commit('EVAL', output)
        } catch (e) {
           commit('EVAL', e.message)
        }
     }
  }
})
