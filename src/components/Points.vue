<template>
  <div class="points">
    <div class="TEST">{{ score }}</div>
    <h3>
      🏅
      <span> points!</span>
    </h3>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'Points',
  methods: {},
  // data() {
  //   return {
  //     score: 0,
  //   };
  // },
  computed: mapState({ score: (state) => state.score }),
};
</script>
<style scoped>
.points {
  display: flex;
  align-items: center;
}
</style>
