<template>
  <div>
    <button @click.prevent="onClick">
      <slot name="content"></slot>
    </button>
  </div>
</template>
<script>
export default {
  name: 'Button',
  props: {
    onClick: null,
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
