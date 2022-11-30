import { reqCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLoginOut } from '@/api'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/USER'
const actions = {
    //获取验证码
    async getCode({ commit }, phone) {
        let result = await reqCode(phone)
            // console.log(result)
        if (result.code == 200) {
            commit("GetCode", result.data)
            return "ok"
        } else {
            return Promise.reject(new Error("faile"))
        }
    },
    //用户注册
    async userRegister({ commit }, user) {
        // console.log(1411111)
        let result = await reqUserRegister(user)
            // console.log(result)
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error("faile"))
        }
    },
    //用户登录
    async userLogin({ commit }, data) {
        // console.log(1411111)
        let result = await reqUserLogin(data)
        console.log(result)
        if (result.code == 200) {
            commit("UserLogin", result.data)
            SET_TOKEN(result.data.token)
            return "ok"
        } else {
            return Promise.reject(new Error("faile"))
        }
    },
    //获取用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo()
            // console.log(result)
        if (result.code == 200) {
            commit("GetUserInfo", result.data)
            return "ok"
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    //退出登录
    async loginOut({ commit }) {
        let result = await reqLoginOut()
        console.log(result)
        if (result.code == 200) {
            commit("LoginOut")
        }
    }

}
const mutations = {
    //储存验证码
    GetCode(state, code) {
        state.code = code
    },
    //储存令牌token
    UserLogin(state, data) {
        state.token = data.token
    },
    //保存用户信息
    GetUserInfo(state, userInfo) {
        state.userInfo = userInfo
    },
    //退出登录,清除用户信息和相应token
    LoginOut(state) {
        state.userInfo = ''
        state.token = ''
        REMOVE_TOKEN()
    }

}
const state = {
    code: '',
    token: GET_TOKEN(),
    userInfo: {}
}
const getters = {

}
export default {
    actions,
    mutations,
    state,
    getters
}