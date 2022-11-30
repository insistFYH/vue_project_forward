import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function(location, resole, reject) {
    if (resole && reject) {
        originPush.call(this, location, resole, reject)
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
}
VueRouter.prototype.replace = function(location, resole, reject) {
    if (resole && reject) {
        originReplace.call(this, location, resole, reject)
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }
}

let vueRouter = new VueRouter({
        routes,
        scrollBehavior(to, from, savedPosition) {
            return { y: 0 }
        }
    })
    //全局路由前置守卫
vueRouter.beforeEach(async(to, from, next) => {
    // console.log(to)
    let login = store.state.user.token
    let name = store.state.user.userInfo.nickName
    if (login) {
        if (to.path == '/login') {
            next('/home')
        } else {
            if (name) {
                next()
            } else {
                try {
                    await store.dispatch("getUserInfo");
                    next()
                } catch (error) {
                    store.dispatch("loginOut")
                    next('/login')
                }
            }
        }
    } else {
        const forword = to.path
        if (forword.indexOf("/shopCart") != -1 || forword.indexOf("/pay") != -1 || forword.indexOf("/center") != -1 || forword.indexOf("/trade") != -1) {
            next(`/login?forword=${forword}`)
        } else {
            next()
        }
    }
})
export default vueRouter