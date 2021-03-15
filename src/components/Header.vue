<template>
  <div class="header-container">
    <h1 class="header">{{ msg }}</h1>
    <div class="header-background"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.header {
  font-style: italic;
  transform: rotate(-1.25deg);
  letter-spacing: -1.5px;
  margin: 0;
  padding-top: 1rem;
  font-weight: 100;
  color: red;
  font-size: 3.5rem;
  z-index: 1;
  position: absolute;
  text-shadow: 0px 1px #000000;
}

.header-background {
  position: relative;
  transform: rotate(-3deg);
  width: 325px;
  height: 85px;
  background-color: rgba(255, 217, 0);
  padding: 0.25rem 0.5rem;
  border-radius: 75% 45%;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 1);
}

@media (max-width: 325px) {
  .header {
    font-size: 3rem;
  }
}

@media (max-width: 280px) {
  .header {
    font-size: 2.5rem;
  }
}
</style>
