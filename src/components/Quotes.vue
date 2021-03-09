<template>
  <div>
    <div class="quote-container">
      <h2 class="quote">
        <span class="quote-highlight">{{ quote }}</span>
      </h2>
      <h2>{{ author }}</h2>
      <Button :onClick="getRandom"><div slot="content">New Quote</div></Button>
    </div>
  </div>
</template>
<script>
import QuotesApi from '../api/getQuotes';
import Button from './Button.vue';

export default {
  name: 'Quotes',
  components: { Button },
  data() {
    return {
      quotes: null,
      quote: null,
      author: null,
    };
  },
  created() {
    this.getRandom();
  },
  methods: {
    getRandom() {
      QuotesApi.getQuotes()
        .then((quotes) => {
          this.quotes = quotes;
          const getRandomIndex = Math.floor(Math.random() * quotes.length);
          const getRandomQuote = quotes[getRandomIndex];
          this.quote = getRandomQuote.quote;
          this.author = getRandomQuote.author;

          const quote = this.quote;
          const author = this.author;
          this.$emit('random-quote', quote, author);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
<style scoped>
.quote-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding-bottom: 4rem;
}

.quote {
  font-style: italic;
  z-index: 0;
  position: relative;
  color: red;
  text-shadow: 0px 1px #000000;
  line-height: 1.25;
}
.quote-highlight {
  box-shadow: inset 0 -35px rgba(255, 217, 0);
}

@media (min-width: 800px) {
  .quote-container {
    height: rem;
  }
}
</style>
