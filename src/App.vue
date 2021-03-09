<template>
  <div id="app">
    <Header msg="Serenity Now!" />
    <div class="game-container">
      <Timer />
      <Quotes v-on:random-quote="checkQuote" />
      <Characters v-on:chosen-character="checkCharacter" />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Timer from './components/Timer.vue';
import Quotes from './components/Quotes.vue';
import Characters from './components/Characters.vue';

export default {
  name: 'App',
  components: {
    Header,
    Timer,
    Quotes,
    Characters,
  },
  mounted() {},
  data() {
    return {
      character: '',
      author: '',
      quote: '',
    };
  },
  computed: {},
  methods: {
    checkCharacter(name) {
      this.character = name;
      if (this.character === this.author) {
        alert('test');
      }
    },
    checkQuote(quote, author) {
      this.quote = quote;
      this.author = author;
    },
  },
};
</script>

<style>
@font-face {
  font-family: 'FeniceStd';
  src: local('FeniceStd'),
    url(./assets/FeniceStd-Regular.otf) format('opentype');
}

#app {
  font-family: 'FeniceStd';
  margin: 0 auto;
  max-width: 50rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.game-container {
  margin-top: 2rem;
  padding: 3rem;
  background: #1c4a9f;
}
</style>
