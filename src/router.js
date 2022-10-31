import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        component: () => import('./components/Home.vue'),
    },
    {
        path:'/tentang-kami',
        component: () => import('./components/About.vue'),
    },
    {
        path:'/fasilitas',
        component: () => import('./components/Fasilitas.vue'),
    },
    {
        path:'/berita',
        component: () => import('./components/Berita.vue'),
    },
    {
        path:'/hubungi-kami',
        component: () => import('./components/Hubungi.vue'),
    },
    {
        path:'/destinasi',
        component: () => import('./components/Destinasi.vue'),
    },
]

const router = createRouter({
   history: createWebHashHistory(), //   createWebHistory(),
   mode: 'history',
   hash: true,
   base: process.env.BASE_URL,
    routes
})

export default router
