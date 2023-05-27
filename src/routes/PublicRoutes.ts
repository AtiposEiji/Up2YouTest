import { RouteRecordRaw } from "vue-router";
import NotFound from "../components/NotFound/index.vue";
import Dashboard from "../views/Dashboard/index.vue";
export const PublicRoutes: Array<RouteRecordRaw> = [
    {
        path: '/:catchAll(.*)',
        redirect: {
            name: "error"
        }
    },
    {
        path: '/error',
        component: NotFound,
        name: 'error'
    },{
        path: '/',
        component: Dashboard,
        name: 'Dashboard'
    }
]

