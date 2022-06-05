import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import ColorSelection from "../pages/ColorSelection.vue";
import FontSelection from "../pages/FontSelection.vue";
import NewNote from "../pages/NewNote.vue";
import Reader from "../pages/Reader.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/new-note",
    name: "NewNote",
    component: NewNote,
  },
  {
    path: "/colors",
    name: "ColorSelection",
    component: ColorSelection,
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
