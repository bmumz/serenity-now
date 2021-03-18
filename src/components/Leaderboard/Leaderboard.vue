<template>
  <div>
    <table class="leaderboard">
      <h1>High Scores</h1>
      <h2>
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
      </h2>
    </table>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Leaderboard',
  data() {
    return {
      scores: null,
    };
  },
  created() {
    this.getHighscores();
  },
  methods: {
    async getHighscores() {
      await axios.get('http://localhost:3000/highscores').then((response) => {
        this.scores = response.data;
      });
    },
  },
};
</script>
<style>
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
