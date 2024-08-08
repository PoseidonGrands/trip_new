import { createStore } from 'vuex'

// 使用三步
// 1、创建仓库
// 2、导出仓库
// 3、使用仓库

const stores = createStore({
  state: {
    isLogin: false,
    user: {},
    profile: {}
  },
  mutations: {
    // 存储当前登录的用户数据
    updateUserInfo(state, { user, profile }) {
      state.user = {
        ...state.user,
        ...user
      }

      state.profile = {
        ...state.profile,
        ...profile
      }
    },

    deleteUserInfo(state) {
      state.user = {}
      state.profile = {}

      state.isLogin = false
    },

    changeLogin(state) {
      state.isLogin = true
    }
  },
  actions: {},
  getters: {
    //  getters
  },
  modules: {
    // 模块
  }
})

export default stores
