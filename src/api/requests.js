import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
let requests = axios.create({
    baseURL: '/api',
    timeout: 5000
})
requests.interceptors.request.use((config) => {
    nprogress.start()
        //存在head请求头
        //在请求头上带上临时游客id
    if (store.state.cartList.USER_ID) {
        config.headers.USERTEMPID = store.state.cartList.USER_ID
    }
    if (store.state.user.token) {
        config.headers.TOKEN = store.state.user.token
    }
    return config

})
requests.interceptors.response.use((res) => {
    nprogress.done()
    return res.data
}, err => {
    // 终止promise
    return Promise.reject(new Error('fail'))
})
export default requests