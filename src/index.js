import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        name: "GeneralPage",
        path: "/",
        component: () => import("./views/GeneralPage.vue")
    },
    {
        name: "EntertainmentPage",
        path: "/entertainment",
        component: () => import("./views/EntertainmentPage.vue")
    }, {
        name: "HealthPage",
        path: "/health",
        component: () => import("./views/HealthPage.vue")
    }, {
        name: "SciencePage",
        path: "/science",
        component: () => import("./views/SciencePage.vue")
    }, {
        name: "SportsPage",
        path: "/sports",
        component: () => import("./views/SportsPage.vue")
    },
]

const router = createRouter({

    routes,
    history: createWebHashHistory()
});

export default router; 