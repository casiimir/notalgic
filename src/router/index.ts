import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import FontSelection from "../pages/FontSelection.vue";
import Reader from "../pages/Reader.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/fonts",
    name: "FontSelection",
    component: FontSelection,
  },
  {
    path: "/reader/:id",
    name: "Reader",
    component: Reader,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
