<template>
  <div>
    <span>
      <!-- remaining time -->
      {{ formattedTimeLeft }}
    </span>
  </div>
</template>
<script>
export default {
  name: 'Timer',
  // props: {
  //   timeLeft: {
  //     type: Number,
  //     required: true,
  //   },
  // },
  data() {
    return {
      isRunning: false,
      countdown: null,
      totalSeconds: 10,
      timePassed: 0,
    };
  },
  mounted() {
    this.startTimer();
  },

  computed: {
    formattedTimeLeft() {
      const timeLeft = this.timeLeft;
      const seconds = timeLeft % 60;
      const display = seconds + ' seconds remaining!';

      return display;
    },
    timeLeft() {
      return this.totalSeconds - this.timePassed;
    },
  },
  methods: {
    startTimer() {
      this.isRunning = true;
      this.countdown = setInterval(() => {
        if (this.totalSeconds <= 0) {
          this.stopTimer();
          return;
        }
        this.totalSeconds -= 1;
      }, 1000);
    },
    stopTimer() {
      this.isRunning = false;
      clearInterval(this.countdown);
    },
  },
};
</script>
<style scoped></style>
