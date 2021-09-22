import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import about from './components/about'
import event from './components/event'
import discussion from './components/discussion'
import speech from './components/speech'
import guide from './components/guide'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: about },
  { path: '/event', component: event },
  { path: '/discussion', component: discussion },
  { path: '/speech', component: speech },
  { path: '/guide', component: guide }
]

const router = new VueRouter({
  routes
})

new Vue({
  vuetify,
  router:router,
  render: h => h(App)
}).$mount('#app')
