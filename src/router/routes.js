export default [{
        name: "home",
        path: '/home',
        component: () =>
            import ('@/pages/Home'),
        meta: { isShow: true }
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        name: "search",
        path: '/search/:keyword?',
        component: () =>
            import ('@/pages/Search'),
        meta: { isShow: true }
    },
    {
        name: "login",
        path: '/login',
        component: () =>
            import ('@/pages/Login'),
        meta: { isShow: false }
    },
    {
        name: "register",
        path: '/register',
        component: () =>
            import ('@/pages/Register'),
        meta: { isShow: false }
    },
    {
        name: "detail",
        path: '/detail/:skuId',
        component: () =>
            import ('@/pages/Detail'),
        meta: { isShow: false }
    },
    {
        name: "addCartSuccess",
        path: "/addCartSuccess",
        component: () =>
            import ('@/pages/AddCartSuccess'),
        meta: { isShow: false },
    },
    {
        name: "shopCart",
        path: "/shopCart",
        component: () =>
            import ('@/pages/ShopCart'),
        meta: { isShow: false }
    },
    {
        name: "trade",
        path: "/trade",
        component: () =>
            import ('@/pages/Trade'),
        meta: { isShow: false }
    },
    {
        name: "pay",
        path: "/pay",
        component: () =>
            import ('@/pages/Pay'),
        meta: { isShow: false },
        beforeEnter: (to, from, next) => {
            if (from.path.indexOf("/trade") != -1) {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        name: "paySuccess",
        path: "/paySuccess",
        component: () =>
            import ('@/pages/PaySuccess'),
        meta: { isShow: false },
        beforeEnter: (to, from, next) => {
            if (from.path.indexOf("/pay") != -1) next()
            else next(false)
        }

    },
    {
        name: "center",
        path: "/center",
        component: () =>
            import ('@/pages/Center'),
        meta: { isShow: false },
        children: [{
                name: "myOrder",
                path: "myOrder",
                component: () =>
                    import ('@/pages/Center/MyOrder'),
            },
            {
                name: "groupOrder",
                path: "groupOrder",
                component: () =>
                    import ('@/pages/Center/GroupOrder'),
            },
            {
                path: "/",
                redirect: "/center/myOrder"
            }
        ]

    }
]