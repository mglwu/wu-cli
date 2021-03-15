const user = {
  namespaced: true,
  state: {
    name: 'wuqi',
    age: 18,
    sex: 'man'
  },
  getters: {
    getName(state) {
      return `${state.name}_57`
    }
  },
  mutations: {
    setName(state, value) {
      state.name = value
    },
    setAge(state, value) {
      state.age = value
    },
    setSex(state, value) {
      state.sex = value
    }
  },
  actions: {
    getUserInfo({ commit }, params) {
      setTimeout(() => {
        commit('setName', params.name)
        commit('setAge', params.age)
        commit('setSex', params.sex)
      }, 2000)
    }
  }
}

export default user
