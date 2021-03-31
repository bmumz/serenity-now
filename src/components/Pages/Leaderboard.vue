<template>
  <div>
    <table class="leaderboard">
      <h1>High Scores</h1>
      <h3>
        <tr>
          <th>Name</th>
          <th>Score</th>
        </tr>

        <tr v-for="score in scores" v-bind:key="score.id">
          <th>{{ score.name }}</th>

          <th>
            <span v-if="score.score < 10">00</span>
            <span v-else-if="score.score > 10 && score.score < 100">0</span
            >{{ score.score }}
          </th>
        </tr>
      </h3>
    </table>
    <div class="button-container">
  <Button :onClick="playAgain" title="Play Again!"/>
    </div>

  </div>
</template>
<script>
import axios from 'axios';
import Button from '../Button'
import { mapActions, } from 'vuex';


export default {
  name: 'Leaderboard',
  components: {Button},
  data() {
    return {
      scores: null,
    };
  },
  created() {
    this.getHighscores();
  },
  methods: {
    ...mapActions(['startGame']),
    async getHighscores() {
      await axios.get('https://serenity-now-leaderboard.herokuapp.com/highscores').then((response) => {
        this.scores = response.data;
      });
    },
    playAgain() {
      this.$router.push('/serenity-now/');
      this.startGame()
    },
  },
};
</script>
<style scoped>
.leaderboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
}

th {
  letter-spacing: 2px;
  width: 10rem;
}
</style>
