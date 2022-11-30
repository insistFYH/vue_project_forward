import requests from './requests.js'
import mockRequests from './mockRequests.js'
export const reqCategroyList = () => {
    return requests({
        method: "get",
        url: "/product/getBaseCategoryList"
    })
}
export const reqBannersList = () => {
    return mockRequests({
        method: "get",
        url: "/banners"
    })
}
export const reqFloorsList = () => {
    return mockRequests({
            method: "get",
            url: "/floors"
        })
        // 相当于mockRequests.get("./floors")，两种写法
}
export const reqSearchList = (params) => {
    return requests({
        method: "post",
        url: "/list",
        data: params
    })
}
export const reqDetailList = (skuId) => {
    return requests({
        method: "get",
        url: `/item/${skuId}`
    })
}
export const reqAddToCart = (skuId, skuNum) => {
    return requests({
        method: "post",
        url: `cart/addToCart/${ skuId }/${ skuNum }`
    })
}
export const reqCartList = () => {
    return requests({
        method: "get",
        url: "/cart/cartList"
    })
}
export const reqDeleteCartInfo = (skuId) => {
    return requests({
        method: "delete",
        url: `/cart/deleteCart/${skuId}`
    })
}
export const reqUpdateChecked = (skuId, isChecked) => {
    return requests({
        method: "get",
        url: `/cart/checkCart/${skuId}/${isChecked}`
    })
}

export const reqCode = (phone) => {
    return requests({
        method: "get",
        url: `/user/passport/sendCode/${phone}`
    })
}
export const reqUserRegister = (user) => {
    return requests({
        method: "post",
        url: "/user/passport/register",
        data: user
    })
}
export const reqUserLogin = (data) => {
    return requests({
        method: "post",
        url: "/user/passport/login",
        data
    })
}
export const reqUserInfo = () => {
    return requests({
        method: "get",
        url: "user/passport/auth/getUserInfo"
    })
}
export const reqLoginOut = () => {
    return requests({
        method: "get",
        url: "/user/passport/logout"
    })
}
export const reqUserAdressList = () => {
    return requests({
        method: "get",
        url: "/user/userAddress/auth/findUserAddressList"
    })
}
export const reqOrder = () => {
    return requests({
        method: "get",
        url: "/order/auth/trade"
    })
}
export const reqSubmitOrder = (tradeNo, data) => {
    return requests({
        method: "post",
        url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
        data
    })
}
export const reqOrderPay = (orderId) => {
    return requests({
        method: "get",
        url: `/payment/weixin/createNative/${orderId}`
    })
}

export const reqQueryPayStatus = (orderId) => {
    return requests({
        method: "get",
        url: `/payment/weixin/queryPayStatus/${orderId}`
    })
}

export const reqOrderList = (page, limit) => {
    return requests({
        method: "get",
        url: `/order/auth/${page}/${limit}`
    })
}