import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import permission from './modules/permission'
import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    permission,
    app
  },
  getters
});

export default store
