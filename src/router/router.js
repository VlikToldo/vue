import Vue from "vue";
import VueRouter from "vue-router";

import FilmCardPage from "@/pages/FilmCardPage";
import LibraryPage from "@/pages/LibraryPage";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: LibraryPage  },
  { path: "/:movieId", component: FilmCardPage },
];

const router = new VueRouter({
  routes,
});

export default router;
