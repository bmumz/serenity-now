<template>
  <div>
    <button @click="onClick" :class="buttonClass">
      <slot name="content"></slot>
    </button>
  </div>
</template>
<script>
export default {
  name: 'Button',
  props: {
    onClick: null,
    buttonClass: String,
  },
};
</script>
<style scoped></style>
