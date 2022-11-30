import { reqSubmitOrder, reqOrder, reqUserAdressList } from "@/api"

const actions = {
    //获取用户地址信息
    async getUserAddressList({ commit }) {
        let result = await reqUserAdressList()
            // console.log(result)
        if (result.code == 200) {
            commit("GetUserAdressList", result.data)
        }
    },
    //获取订单商品集合
    async getOrderDetailList({ commit }) {
        let result = await reqOrder()
            // console.log(result.data)
        if (result.code == 200) {
            commit("GetOrderDetailList", result.data)
        }
    },

}
const mutations = {
    GetUserAdressList(state, userAddressList) {
        state.userAddressList = userAddressList || []
    },
    GetOrderDetailList(state, data) {
        state.orderInfo = data
        state.orderDetailVoList = data.orderDetailVoList[0] || {}
    }
}
const state = {
    userAddressList: [],
    orderInfo: {},
    orderDetailVoList: {}
}
const getters = {

}
export default {
    actions,
    mutations,
    state,
    getters
}