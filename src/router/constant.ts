const constantRoutes = [
    {
        path: '/active',
        name: 'activeForm',
        component: () => import('@/views/aForm/index.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/register/register.vue'),
    },
    {
        path: '/',
        name: 'login',
        component: () => import('@/views/login/login.vue')
    },
    {
        path: '/layout',
        name: 'layout',
        component: () => import('@/views/layout/layout.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/404/404.vue')
    }
]

export default constantRoutes
