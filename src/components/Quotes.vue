<template>
  <div class="quote-container">
    <h1 class="quote" v-if="handleStartGame">
      <span class="highlight"> {{ randomQuote.quote }}</span>
    </h1>
    <div v-else class="instructions">
      <Message />
      <Button :onClick="getNewQuote">
        <h1 slot="content" class="quote">
          <span class="highlight" v-if="handleResult">Try again!</span>
          <span class="highlight" v-else>Start!</span>
        </h1>
      </Button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import Button from './Button.vue';
import Message from './Message.vue';

export default {
  name: 'Quotes',
  components: { Button, Message },
  methods: {
    ...mapActions(['fetchQuotes', 'getRandomQuote', 'startGame']),
    getNewQuote() {
      this.startGame();
      this.getRandomQuote();
      this.$store.commit('UPDATE_CHAR', '');
    },
  },
  computed: mapGetters(['randomQuote', 'handleStartGame', 'handleResult']),
  created() {
    this.fetchQuotes();
  },
};
</script>
<style>
.quote-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.quote {
  font-style: italic;
  z-index: 0;
  position: relative;
  color: red;
  text-shadow: 0px 1px #000000;
  line-height: 1.25;
}
.highlight {
  box-shadow: inset 0 -35px rgba(255, 217, 0);
}

.instructions {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 800px) {
  .quote {
    padding: 0 2rem;
  }
}

@media (max-width: 325px) {
  .quote {
    font-size: 1.5rem;
  }
}
</style>
