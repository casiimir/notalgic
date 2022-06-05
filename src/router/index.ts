import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import Reader from "../pages/Reader.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Reader/:id",
    name: "Reader",
    component: Reader,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
