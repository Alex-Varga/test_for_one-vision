import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
    SET_DATA_TO_STATE: (state, data) => {
      state.data = data
    }
  },
  actions: {
    fetchData({commit}) {
      return axios('http://localhost:8080/db.json', {
        method: 'GET'
      })
      .then((res) => {
        commit('SET_DATA_TO_STATE', res.data)
        console.log(res.data)
      })
      .catch((e) => {
        console.log(e)
        return e
      })
    }
  },
  getters: {
    DATAS(state) {
      return state.data
    }
  }
})
