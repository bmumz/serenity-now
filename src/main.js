import Vue from 'vue';
import VueMeta from 'vue-meta';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueMeta);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
