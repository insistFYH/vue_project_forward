import { reqDetailList, reqAddToCart } from "@/api"
const actions = {
    async getDetailInfo({ commit }, skuId) {
        let result = await reqDetailList(skuId)
            // console.log(result)
        if (result.code == 200) {
            commit('GetDetailInfo', result)
        }
    },
    async addCart({ commit }, { skuId, skuNum }) {
        let result = await reqAddToCart(skuId, skuNum)
            // console.log(result)
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error('faile'))
        }
    }

}
const mutations = {
    GetDetailInfo(state, result) {
        state.detailInfo = result.data
    }

}
const state = {
    detailInfo: {},
    skuInfo: {}
}
const getters = {
    categoryView(state) {
        return state.detailInfo.categoryView || {};
    },
    skuInfo(state) {
        return state.detailInfo.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.detailInfo.spuSaleAttrList || []
    }

}
export default {
    actions,
    mutations,
    state,
    getters
}