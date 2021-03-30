<template>
  <div class="message">
    <GameOver v-if="handleGameOver" />
    <Instructions  v-else/>

    <Button v-if="handleGameOver" :onClick="getNewQuote" title="Play Again!"/>
    <Button v-else :onClick="getNewQuote" title="Start!"/>

  </div>
</template>
<script>
import Instructions from './Instructions';
import GameOver from './GameOver';
import Button from '../Button';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Message',
  components: { GameOver, Instructions, Button },
  computed: mapGetters(['handleGameOver']),
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
