import { RouteRecordRaw } from "vue-router";

export default {
    name:'editor',
    path:'/editor',
    component: () => import('@/layouts/editor.vue'),
    meta:{title:'编辑器',icon:'fas fa-spell-check',show:true},
    children:[
        {
            name:'editor/markdown',
            path:'markdown',
            component:() => import("@/views/editor/markdown.vue"),
            meta:{title:'编辑器',show:true},

        },
        {
            name:'editor/base',
            path:'base',
            component:() => import("@/views/editor/base.vue")
        },
        
    ]
} as RouteRecordRaw

