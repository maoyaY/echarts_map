import * as types from './mutation-types'

const mutations = {
  [types.SET_USERINFO] (state, userinfo) {
    state.userinfo = userinfo
  },
  [types.LOGIN] (state, tooken) {
    state.tooken = tooken
  }
}

export default mutations
