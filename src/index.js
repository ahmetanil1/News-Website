import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        name: "GeneralPage",
        path: "/",
        component: () => import("./views/GeneralPage.vue")
    },
    {
        name: "EntertainmentPage",
        path: "/bbc-news",
        component: () => import("./views/EntertainmentPage.vue")
    }, {
        name: "HealthPage",
        path: "/bbc-sport",
        component: () => import("./views/HealthPage.vue")
    }, {
        name: "SciencePage",
        path: "/australian-financial-review",
        component: () => import("./views/SciencePage.vue")
    }, {
        name: "SportsPage",
        path: "/buzzfeed",
        component: () => import("./views/SportsPage.vue")
    },
]

const router = createRouter({

    routes,
    history: createWebHashHistory()
});

export default router; 