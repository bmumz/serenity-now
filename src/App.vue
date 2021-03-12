<template>
  <div id="app">
    <Header msg="Serenity Now!" />
    <div class="game-container">
      <div class="scoring-container">
        <Timer />
        <Points />
      </div>
      <Quotes />
      <Characters />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Timer from './components/Timer.vue';
import Points from './components/Points.vue';
import Quotes from './components/Quotes.vue';
import Characters from './components/Characters.vue';

export default {
  name: 'App',
  components: {
    Header,
    Timer,
    Points,
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
  methods: {},
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
  color: #eee;
  margin-top: 60px;
}

.game-container {
  margin-top: 2rem;
  padding: 3rem;
  background: #1c4a9f;
}

.scoring-container {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
}
</style>
