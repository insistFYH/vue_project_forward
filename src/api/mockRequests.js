import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
let mockRequests = axios.create({
    baseURL: '/mock',
    timeout: 5000
})
mockRequests.interceptors.request.use((config) => {
    nprogress.start()
        //存在head请求头
    return config
})
mockRequests.interceptors.response.use((res) => {
    nprogress.done()
    return res.data
}, err => {
    // 终止promise
    return Promise.reject(new Error('fail'))
})
export default mockRequests