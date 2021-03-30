const state = {
  score: 0,
  chosenCharacter: '',
  startGame: false,
  startTimer: false,
  countdown: 15,
  isRunning: null,
  gameOver: false,
};
const getters = {
  getScore: (state) => state.score,
  getChar: (state) => state.chosenCharacter,
  startTimer: (state) => state.startTimer,
  handleCountdown: (state) => state.countdown,
  handleStartGame: (state) => state.startGame,
  handleGameOver: (state) => state.gameOver
};

const actions = {
  stopTimer({ commit, state }) {
    commit('SET_TIMER', false);
    clearInterval(state.isRunning);
  },
  startTimer({ commit, state, dispatch }) {
    commit('SET_TIMER', true);
    state.isRunning = setInterval(() => {
      if (state.countdown <= 0) {
        dispatch('stopTimer');
        return;
      }
      state.countdown -= 1;
    }, 1000);
  },
  startGame({ commit, dispatch }) {
    commit('START_GAME');
    dispatch('startTimer');
    commit('SET_GAME_OVER', false);
  },
  handleLoss({ commit }) {
    commit('SET_GAME_OVER', true);
    commit('STOP_GAME');
  },
};
const mutations = {
  START_GAME(state) {
    state.startGame = true;
    state.countdown = 15;
    state.score = 0;
  },
  STOP_GAME(state) {
    state.startGame = false;
  },
  UPDATE_SCORE(state) {
    state.score++;
  },
  UPDATE_CHAR(state, char) {
    state.chosenCharacter = char;
  },
  SET_TIMER(state, value) {
    state.startTimer = value;
  },
  SET_COUNTDOWN(state, value) {
    state.countdown = value;
  },
  SET_GAME_OVER(state, value) {
    state.gameOver = value;
  },

};

export default { state, getters, actions, mutations };
