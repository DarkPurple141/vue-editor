import Vue from 'vue'
import Router from 'vue-router'
import Editor from '@/pages/Editor.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Editor',
      component: Editor
    }
  ]
})
