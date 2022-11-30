import { reqSearchList } from "@/api"
let actions = {
    async getSearchList({ commit }, params = {}) {
        let result = await reqSearchList(params)
            // console.log(result)
        if (result.code == 200) {
            commit('GetSearchList', result)
        }
    }

}
let mutations = {
    GetSearchList(state, result) {
        state.searchList = result.data
    }

}
let state = {
    searchList: {}
}
let getters = {
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    }
}
export default {
    actions,
    mutations,
    state,
    getters
}