import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    challenge: {
      name: '',
      description: '',
      deadline: '',
      category: '',
      
    }
  },

  mutations: {
    increment(state) {
      state.count ++;
    }
  }
})