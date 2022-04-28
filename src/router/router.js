import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../components/Home.vue';
import User from '../components/User.vue';
import NotFound from '../components/NotFound.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/users/:id', component: User},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router