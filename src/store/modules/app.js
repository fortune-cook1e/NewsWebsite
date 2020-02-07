
const state = {
  sideStatus: false, // 侧边栏状态
  newsTypeId: '', // 当前新闻类型id
  appid: '',
  channelId: ''
}

const getters = {
  sideStatus: state => state.sideStatus,
  newsTypeId: state => state.newsTypeId,
  appid: state => state.appid,
  channelId: state => state.channelId
}

const mutations = {
  TOGGLE_SIDE_STATUS(state, status) {
    state.sideStatus = status
  },
  SET_NEWSTYPEID(state, id) {
    state.newsTypeId = id
  },
  SET_APPID(state, id) {
    state.appid = id
  },
  SET_CHANNELID(state, id) {
    state.channelId = id
  }
}

const actions = {
  // 改变侧边栏状态
  toggleSideStatus({ commit }, status) {
    commit('TOGGLE_SIDE_STATUS', status)
  },
  // 设置新闻类型id
  setTypeId({ commit }, id) {
    commit('SET_NEWSTYPEID', id)
  },
  // 设置appid
  setAppId({ commit }, id) {
    commit('SET_APPID', id)
  },
  setChannelId({ commit }, id) {
    commit('SET_CHANNELID', id)
  }
}

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions
}
