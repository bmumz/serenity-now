<template>
  <div class="points">
    <h3>
      🏅
      <span>{{
        getScore === 1 ? getScore + ' point!' : getScore + ' points!'
      }}</span>
    </h3>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Points',
  computed: { ...mapGetters(['getScore']) },
};
</script>
<style scoped>
.points {
  display: flex;
  align-items: center;
}
</style>
