<template>
  <div class="message">
    <h2>
      You are Lord of the Idiots!
    </h2>
    <div v-if="getScore > 0" class="message">
      <h3>
        Add your score to the leaderboard?
      </h3>

      <AddHighscore ref="highscore" />
      <Leaderboard />
    </div>
  </div>
</template>
<script>
import AddHighscore from '../Leaderboard/AddHighscore';
import Leaderboard from '../Leaderboard/Leaderboard';
import { mapGetters } from 'vuex';

export default {
  name: 'GameOver',
  components: { AddHighscore, Leaderboard },
  computed: { ...mapGetters(['getScore']) },
};
</script>
<style></style>
