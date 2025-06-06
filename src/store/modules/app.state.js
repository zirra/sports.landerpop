const MUTATE_SYSCLOCK = 'mutateSysClock'

const state = {
  sysClock: null
}

const getters = {
  sysClock: (state) => state.sysClock
}

const mutations = {
  mutateSysClock (state, time) {
    state.sysClock = time
  }
}

const actions = {
  setSysClock ({commit}, time) {
    commit(MUTATE_SYSCLOCK, time)
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}