import * as types from './mutation-types'

const mutations = {
  [types.SHOW_LOADING](state,status){
    state.globalLoading = status
  },

  [types.SET_USER](state,user){
    state.user = user
  }
}

export default mutations
