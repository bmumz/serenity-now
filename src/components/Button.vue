<template>
  <div>
    <button @click.prevent="onClick" :class="buttonClass">
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
<style>
button {
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
}
</style>
