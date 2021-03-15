<template>
  <div class="countdown">
    <h3>
      ⏰
      <span>
        {{ formattedTimeLeft }}
      </span>
    </h3>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Timer',
  computed: {
    ...mapGetters(['handleCountdown']),
    formattedTimeLeft() {
      const timeLeft = this.timeLeft;
      const seconds = timeLeft % 60;
      let display = seconds + ' seconds remaining!';

      if (this.handleCountdown === 0) {
        display = "time's up!";
        this.handleLoss();
      }

      return display;
    },
    timeLeft() {
      return this.handleCountdown - 0;
    },
  },
  methods: {
    ...mapActions(['handleLoss']),
  },
};
</script>
<style scoped>
.countdown {
  display: flex;
  align-items: center;
}
</style>
