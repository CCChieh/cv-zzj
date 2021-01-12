// 系统全局配置

const state = () => {
  return {
    settings: {},
    companyList: [],
    showFloatLogin: false
  }
}

const getters = {
  setting: state => key => {
    return state.settings[key] || {}
  },
  companyList: state => {
    return state.companyList
  },
  showFloatLogin: state => {
    return state.showFloatLogin
  }
}

const mutations = {
  SET_SETTINGS: (state, settings) => {
    state.settings = settings
  },
  SET_COMPANY_LIST: (state, companyList) => {
    state.companyList = companyList
  },
  SET_SHOW_FLOAT_LOGIN: (state, showFloatLogin) => {
    state.showFloatLogin = showFloatLogin
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
