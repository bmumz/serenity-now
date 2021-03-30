import Vue from 'vue';
import VueMeta from 'vue-meta';
import VueRouter from 'vue-router'
import Home from '../src/components/Pages/Home'
import Leaderboard from '../src/components/Pages/Leaderboard'
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueMeta);
Vue.use(VueRouter);

const routes = [
  {path: '/',
component: Home},
{path: '/highscores',
component: Leaderboard}

]

const router = new VueRouter({
  routes, mode: 'history'
})

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
