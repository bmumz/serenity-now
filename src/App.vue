<template>
  <div id="app">
    <Header msg="Serenity Now!" />
    <div class="game-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  metaInfo: {
    title: 'Serenity Now! | Seinfeld Quiz',
  },
  components: {
    Header,
  },
};
</script>

<style>
@font-face {
  font-family: 'FeniceStd';
  src: local('FeniceStd'),
    url(./assets/FeniceStd-Regular.otf) format('opentype');
}

html {
  background: url('https://st2.depositphotos.com/2877797/8113/v/600/depositphotos_81135792-stock-illustration-seamless-background-80s.jpg');
  max-width: 100vw;
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
  padding: 2rem;
  background: #1c4a9f;
}

.scoring-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 1.25em;
}

h2 {
  font-size: 1em;
}

h3 {
  margin: 0;
  font-size: 0.75em;
}

@media (min-width: 800px) {
  .scoring-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 1rem;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.17em;
  }


}
</style>
