import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    token: ''
  }
  
  const getters = {
    getUserToken: state => state.token
  }
  
  const mutations = {
    setUserToken (state, token) {
      state.token = token
    },
    clearToken(state) {
        state.token = ''
      }
  }

  
//   const actions = {
//     saveUserToken ({ commit }, token) {
//       commit('setUserToken', token)
//     }
// }
  
// eslint-disable-next-line import/no-named-as-default-member
export default () => new Vuex.Store({
    state,
    getters,
    mutations,
    // actions
  })


