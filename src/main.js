import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Main from "@/pages/Main";

Vue.use(VueRouter);

const routes = [
  { path: '/', components: Main},
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app') 

