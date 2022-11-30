import { reqCategroyList, reqBannersList, reqFloorsList } from '../../api'
let actions = {
    async getCategoryList({ commit, state, dispatch }) {
        let result = await reqCategroyList()
        if (result.code == 200) commit('GetCategoryList', result)
    },
    async getBannerList({ commit }) {
        let result = await reqBannersList()
        if (result.code == 200) commit('GetBannersList', result)
    },
    async getFloorsList({ commit }) {
        let result = await reqFloorsList()
        if (result.code == 200) commit('GetFloorsList', result)
    }

}
let mutations = {
    GetCategoryList(state, result) {
        // console.log(result.data)
        state.categoryList = result.data
    },
    GetBannersList(state, result) {
        state.bannersList = result.data
    },
    GetFloorsList(state, result) {
        state.floorsList = result.data
    }
}
let state = {
    categoryList: [],
    bannersList: [],
    floorsList: []
}
export default {
    actions,
    mutations,
    state
}