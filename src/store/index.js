import Vue from 'vue';
import Vuex from 'vuex';
import quotes from './modules/quotes';
import game from './modules/game';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    game,
    quotes,
  },
});
