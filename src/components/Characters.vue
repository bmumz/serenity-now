<template>
  <div class="results">
    <h1 class="author" v-if="handleStartGame">
      {{ getChar === '' ? 'Who said it?!' : '- ' + getChar }}
    </h1>

    <div class="characters">
      <div v-for="(character, index) in characters" v-bind:key="index">
        <button
          class="button"
          @click.prevent="
            handleChooseCharacter(randomQuote.author, character.name)
          "
        >
          <img :src="character.url" :alt="character.name" class="button-img" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Characters',
  data() {
    return {
      characters: [
        { name: 'Jerry', url: require('../assets/jerryBtn.png') },
        { name: 'Elaine', url: require('../assets/elaineBtn.png') },
        { name: 'Kramer', url: require('../assets/kramerBtn.png') },
        { name: 'George', url: require('../assets/georgeBtn.png') },
      ],
    };
  },
  computed: mapGetters([
    'randomQuote',
    'getScore',
    'getChar',
    'handleStartGame',
    'handleResult',
    'handleCountdown',
  ]),
  methods: {
    ...mapActions(['getRandomQuote', 'startTimer', 'stopTimer']),
    handleChooseCharacter(author, character) {
      if (author === character) {
        this.$store.commit('UPDATE_CHAR', character);
        this.stopTimer();

        if (character !== '') {
          const delay = setTimeout(() => {
            this.getRandomQuote();
            this.$store.commit('SET_COUNTDOWN', 10);
            this.$store.commit('UPDATE_SCORE');
            this.$store.commit('UPDATE_CHAR', '');
            this.startTimer();
          }, 1000);
          return () => {
            clearTimeout(delay);
          };
        }
      }
      if (author !== character) {
        this.$store.commit('UPDATE_CHAR', 'Incorrect! Try again.');
      }
    },
  },
};
</script>
<style>
.author {
  margin-top: 4rem;
}
.results {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.characters {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.button {
  outline: none;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.5s;
}

.button:hover {
  transform: rotate(-15deg);
}
.button-img {
  width: 80px;
}

@media (min-width: 800px) {
  .button-img {
    width: 100%;
  }
}

@media (max-width: 320px) {
  .button-img {
    width: 55px;
  }

  .author {
    font-size: 1.3rem;
  }
}
</style>
