import { reqCartList, reqDeleteCartInfo, reqUpdateChecked } from "@/api";
import { SET_USER_ID } from "@/utils/USER_ID";
const actions = {
    //获取购物车信息函数
    async getCartList({ commit }) {
        let result = await reqCartList()
        if (result.code == 200) {
            commit("GetCartList", result)
        }
    },
    //删除购物车商品信息
    async deleteCartInfo({ commit }, skuId) {
        let result = await reqDeleteCartInfo(skuId)
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error(faile))
        }
    },
    //修改购物车商品选中状态
    async updateChecked({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateChecked(skuId, isChecked)
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error(faile))
        }
    },
    //删除选中的所有商品
    deleteAllSelectCart({ dispatch, getters }) {
        let promise = []
        getters.cartInfoOBJ.cartInfoList.forEach(item => {
            let deleteItem = item.isChecked == 1 ? dispatch("deleteCartInfo", item.skuId) : ''
            promise.push(deleteItem)
        })
        return Promise.all(promise)
    },
    //选中所有商品
    updateCheckAll({ dispatch, state }, isChecked) {
        let promise = []
        state.cartList[0].cartInfoList.forEach(item => {
            let updateItem = dispatch("updateChecked", { skuId: item.skuId, isChecked })
            promise.push(updateItem)
        })
        return Promise.all(promise)
    }

}
const mutations = {
    //将购物车信息加入仓库
    GetCartList(state, result) {
        state.cartList = result.data
            // console.log(state.cartList)
    }

}
const state = {
    cartList: [],
    //在相应仓库中调用获取游客id函数，获取游客id
    USER_ID: SET_USER_ID()

}
const getters = {
    cartInfoOBJ(state) {
        return state.cartList[0] || {}
    }
}
export default {
    actions,
    mutations,
    state,
    getters
}