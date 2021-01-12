// 系统全局配置

const state = () => {
  return {
    leftDrawer: true
  }
}

const getters = {
  leftDrawer: state => {
    return state.leftDrawer
  }
}

const mutations = {
  SET_Left_Drawer: (state, leftDrawer) => {
    state.leftDrawer = leftDrawer
  }
}

const actions = {
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
