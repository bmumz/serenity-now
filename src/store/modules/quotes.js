import axios from 'axios';

const state = {
  quotes: [],
  currentQuote: '',
};

const getters = {
  randomQuote: (state) => state.currentQuote,
};

const actions = {
  async fetchQuotes({ commit }) {
    if (!window.localStorage.store) {
      const response = await axios.get(
        'https://seinfeld-quotes.herokuapp.com/quotes'
      );

      commit('SET_QUOTES', await response.data.quotes);
    }
  },
  async getRandomQuote({ state, dispatch, commit }) {
    await dispatch('fetchQuotes');
    const setRandomIndex = Math.floor(Math.random() * state.quotes.length);
    const getRandomQuote = state.quotes[setRandomIndex];

    commit('SET_RANDOM', await getRandomQuote);
  },
};

const mutations = {
  SET_QUOTES: (state, quotes) =>
    (state.quotes = quotes.filter(
      (quote) =>
        quote.author === 'Elaine' ||
        quote.author === 'Jerry' ||
        quote.author === 'George' ||
        quote.author === 'Kramer'
    )),

  SET_RANDOM: (state, quote) => (state.currentQuote = quote),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
