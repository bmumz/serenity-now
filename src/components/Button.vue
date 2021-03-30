<template>
  <div>
    <button @click.prevent="onClick">
     <h1 class="text"> <span class="highlight">{{title}}</span></h1>
    </button>

  </div>
</template>
<script>
export default {
  name: 'Button',
  props: {
    onClick: null,
    title: String
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
.text {
  font-style: italic;
  z-index: 0;
  position: relative;
  color: red;
  text-shadow: 0px 0.6px #000000;
  line-height: 1.25;
}

.highlight {
  box-shadow: inset 0 -35px rgba(255, 217, 0);
}

.button-container {
  display: flex;
  justify-content: center;
}
</style>
