import { RouteRecordRaw } from "vue-router";

export default {
    name: 'error',
    path: '/error',
    component: () => import('@/layouts/admin.vue'),
    children: [
        {
            name: 'error.404',
            path: '404',
            component: () => import("@/views/errors/404.vue"),
            meta: { show: true, title: '404页面', icon: 'fab fa-dropbox' },
        },
        {
            name: 'error.403',
            path: '403',
            component: () => import("@/views/errors/403.vue")
        },
        {
            name: 'error.500',
            path: '500',
            component: () => import("@/views/errors/500.vue")
        }
    ]
} as RouteRecordRaw

