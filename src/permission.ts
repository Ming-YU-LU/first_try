// 验证权限token是否过期的组件 这里使用路由导航守卫组件
import router from '@/router/index'
import { GET_TOKEN } from '@/utils/localStorage'

router.beforeEach((to, from, next) => {
    // console.log(to.matched, 'to.matched')
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        const token = GET_TOKEN('token')
        const isAuthenticated = !!token
        if (isAuthenticated) {
            next()
        } else {
            next('/login')
        }
    } else if (to.matched.length === 0) {
        next('/404')
    } else {
        next()
    }
})