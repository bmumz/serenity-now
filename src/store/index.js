import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import game from './modules/game';
import quotes from './modules/quotes';

// Load Vuex
Vue.use(Vuex);
// Initialize Vuex-persist
const vuexPersist = new VuexPersist({
  key: 'store',
  storage: window.localStorage,
});

// Create store
export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  modules: {
    game,
    quotes,
  },
});
