<template>
  <div class="quote-container">
    <h1 class="quote" v-if="handleStartGame">
      <span class="highlight"> {{ randomQuote.quote }}</span>
    </h1>

    <Message v-else />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import Message from './GameMessages/Message';

export default {
  name: 'Quotes',
  components: { Message },
  methods: {
    ...mapActions(['fetchQuotes']),
  },
  computed: mapGetters(['randomQuote', 'handleStartGame']),
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
  text-shadow: 0px 0.6px #000000;
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
    padding: 0 1rem;
    text-shadow: 0px 1px #000000;
  }
}
</style>
