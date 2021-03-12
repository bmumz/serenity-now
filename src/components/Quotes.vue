<template>
  <div class="quote-container">
    <h1 class="quote">
      <span class="quote-highlight"> {{ randomQuote.quote }}</span>
    </h1>

    <!-- <Button :onClick="getNewQuote"><div slot="content">New Quote</div></Button> -->
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
// import Button from './Button.vue';

export default {
  name: 'Quotes',
  // components: { Button },
  methods: {
    ...mapActions(['fetchQuotes']),
  },
  computed: mapGetters(['randomQuote']),
  created() {
    this.fetchQuotes();
  },
};
</script>
<style scoped>
.quote-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 15rem;
  padding-bottom: 4rem;
}

.quote {
  font-style: italic;
  z-index: 0;
  position: relative;
  color: red;
  text-shadow: 0px 1px #000000;
  line-height: 1.25;
  padding: 0 4rem;
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
