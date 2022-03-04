import { RouteRecordRaw } from "vue-router";
import Layout from "@/views/Layout/index";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Layout",
        component: Layout,
        redirect: "/home",
        children: [
            {
                path: "/home",
                name: "Home",
                component: () => import("@/views/Home/index.vue"),
            },
            {
                path: "/expert",
                name: "Expert",
                component: () => import("@/views/Expert/index.vue"),
            },
            {
                path: "/customerService",
                name: "CustomerService",
                component: () => import("@/views/CustomService/index.vue"),
            },
            {
                path: "/system",
                name: "System",
                component: () => import("@/views/System/index.vue"),
            },
            {
                path: "/aboutUs",
                name: "AboutUs",
                component: () => import("@/views/About/index.vue"),
            },
        ],
    },
];
export default routes;
