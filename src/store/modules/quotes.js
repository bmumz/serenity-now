import axios from 'axios';

const state = {
  quotes: [],
  currentQuote: '',
};

const getters = {
  randomQuote: (state) => {
    const setRandomIndex = Math.floor(Math.random() * state.quotes.length);
    const getRandomQuote = state.quotes[setRandomIndex];
    return (state.currentQuote = getRandomQuote);
  },
};

const actions = {
  async fetchQuotes({ state, commit }) {
    if (!state.quotes['quotes']) {
      const response = await axios.get(
        'https://seinfeld-quotes.herokuapp.com/quotes'
      );

      commit('SET_QUOTES', response.data.quotes);
    }
  },
  randomQuote({ state, commit }) {
    const quotes = state.quotes;

    const setRandomIndex = Math.floor(Math.random() * quotes.length);
    const getRandomQuote = quotes[setRandomIndex];

    commit('SET_RANDOM', getRandomQuote);
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
