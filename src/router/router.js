import Main from "@/pages/Main";
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', components: Main},
];

const router = new VueRouter({
  routes
});

export default router;
