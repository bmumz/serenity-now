<template>
  <div>
    <h2>
      <div v-if="handleResult">
        You are Lord of the Idiots!
      </div>
      <div v-else>
        Test your Seinfeld knowledge!
        <br />
        <br />
        You will have <i>10 seconds</i> to select the correct character who said
        the quote shown. Good luck!
      </div>
    </h2>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Message',
  computed: mapGetters(['handleResult']),
};
</script>
<style scoped></style>
