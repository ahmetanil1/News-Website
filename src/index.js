import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        name: "GeneralPage",
        path: "/general",
        components: () => import("./views/GeneralPage.vue")
    },
    {
        name: "EntertainmentPage",
        path: "/entertainment",
        components: () => import("./views/EntertainmentPage.vue")
    }, {
        name: "HealthPage",
        path: "/health",
        components: () => import("./views/HealthPage.vue")
    }, {
        name: "SciencePage",
        path: "/science",
        components: () => import("./views/SciencePage.vue")
    }, {
        name: "SportsPage",
        path: "/sports",
        components: () => import("./views/SportsPage.vue")
    }, {
        name: "TechnologyPage",
        path: "/technology",
        components: () => import("./views/TechnologyPage.vue")
    },
]

const router = createRouter({

    routes,
    history: createWebHashHistory()
});

export default router; 