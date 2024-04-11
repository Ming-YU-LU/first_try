const constantRoutes = [
    {
        path: '/active',
        name: 'activeForm',
        component: () => import('@/views/aForm/index.vue'),
    },
    {
        path: '/',
        name: 'register',
        component: () => import('@/views/register/register.vue'),
    }
]

export default constantRoutes
