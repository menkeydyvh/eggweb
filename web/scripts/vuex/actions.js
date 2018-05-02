import * as types from './mutation-types'

const actions = {
  showLoading({commit},status){
    commit(types.SHOW_LOADING,status)
  },
  setUser({commit},user){
    commit(types.SET_USER,user)
  }
}

export default actions
