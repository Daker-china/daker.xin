/**
 * 全局设置数据状态
 */

export const state = () => {
  return {
    // 页面的栏目展示类型（3栏/2栏）
    fullColumn: false,
    errorColumn: false,

    // 是否为移动端
    isMobile: false,

    // 移动端侧边栏
    mobileSidebar: false,

    // ua
    userAgent: '',

    // 服务端博主信息
    adminInfo: {
      fetching: false,
      data: {}
    },

    // 服务端设置的全局配置
    globalOption: {
      fetching: false,
      data: {
        meta: {
            likes: 0
        }
      }
    }
  }
}

export const mutations = {

  // 设置UA
  SET_USER_AGENT(state, action) {
    state.userAgent = action
  },

  // 设置是否移动端状态
  SET_IS_MOBILE (state, action) {
    state.isMobile = action
  },

  // 设置栏目结构
  SET_FULL_COLUMU(state, action) {
    state.fullColumn = action
  },

  // 切换移动端侧边栏
  SET_MOBILE_SIDEBAR(state, action) {
    state.mobileSidebar = action
  },

  // 获取服务端配置的管理员信息
  REQUEST_ADMIN_INFO(state) {
      state.adminInfo.fetching = true
  },
  REQUEST_ADMIN_INFO_SUCCESS(state, action) {
      state.adminInfo.fetching = false
      state.adminInfo.data = action.result
  },
  REQUEST_ADMIN_INFO_FAILURE(state) {
      state.adminInfo.fetching = false
      state.adminInfo.data = {}
  },

  // 获取服务端配置
  REQUEST_GLOBAL_OPTIONS(state) {
      state.globalOption.fetching = true
  },
  REQUEST_GLOBAL_OPTIONS_SUCCESS(state, action) {
      state.globalOption.fetching = false
      state.globalOption.data = action.result
  },
  REQUEST_GLOBAL_OPTIONS_FAILURE(state) {
      state.globalOption.fetching = false
  },
}
