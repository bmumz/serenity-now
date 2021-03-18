<template>
  <div class="message">
    <GameOver v-if="handleResult" />
    <Instructions v-else />

    <Button :onClick="getNewQuote">
      <h1 slot="content" class="quote">
        <span class="highlight" v-if="handleResult">Try Again!</span>
        <span class="highlight" v-else>Start!</span>
      </h1>
    </Button>
  </div>
</template>
<script>
import Instructions from './Instructions';
import GameOver from './GameOver';
import Button from '../Button';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Message',
  components: { Instructions, GameOver, Button },
  computed: mapGetters(['handleResult']),
  methods: {
    ...mapActions(['fetchQuotes', 'getRandomQuote', 'startGame']),
    getNewQuote() {
      this.startGame();
      this.getRandomQuote();
      this.$store.commit('UPDATE_CHAR', '');
    },
  },
};
</script>
<style>
.message {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
