
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Calendar from '@/views/Calendar.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home, alias: "/home"},
        {path: '/calendar', name: 'Calendar', component: Calendar},
    ]
})

export default router