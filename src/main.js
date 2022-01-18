import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store/store.js'
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate'


// Components to Route
import daily from './components/DailyContent'
import diet from './components/diet'
import exercises from './components/exercises'
import measurements from './components/measurements'
import sleep from './components/sleep'
import weight from './components/weight'
import challenges from './components/challenges'

Vue.config.productionTip = false
Vue.use(Router, Vuex);
Vue.use(Vuelidate, VueAxios)

const routes = [
  {
    path: '/',
    component: daily
  },
  {
    path: '/diet',
    component: diet
  },
  {
    path: '/exercises',
    component: exercises
  },
  {
    path: '/measurements',
    component: measurements
  },
  {
    path: '/sleep',
    component: sleep
  },
  {
    path: '/weight',
    component: weight
  },
  {
    path: '/challenges',
    component: challenges
  }
];


const router = new Router({
  routes,
  mode: 'history' //option which is removing # from URL
})

new Vue({
  render: h => h(App),
  router, store
}).$mount('#app')
