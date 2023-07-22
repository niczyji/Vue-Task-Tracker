import { createRouter, createWebHashHistory } from "vue-router";
import About from "../views/About";

const routes = [
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
