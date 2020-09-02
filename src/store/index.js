import Vue from 'vue'
import Vuex from 'vuex'
import spacex from "./spacex.module";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    spacex,
  }
})
