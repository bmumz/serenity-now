<template>
  <div class="characters">
    <div v-for="(character, index) in characters" v-bind:key="index">
      <button
        class="button"
        @click.prevent="handleChooseCharacter(character.name)"
      >
        <img :src="character.url" :alt="character.name" />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Characters',
  data() {
    return {
      character: '',
      characters: [
        { name: 'Jerry', url: require('../assets/jerryBtn.png') },
        { name: 'Elaine', url: require('../assets/elaineBtn.png') },
        { name: 'Kramer', url: require('../assets/kramerBtn.png') },
        { name: 'George', url: require('../assets/georgeBtn.png') },
      ],
    };
  },
  methods: {
    handleChooseCharacter(name) {
      this.character = name;
      this.$emit('chosen-character', name);
    },
  },
};
</script>
<style>
.characters {
  display: flex;
}

.button {
  outline: none;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.5s;
}

.button:hover {
  transform: rotate(-15deg);
}
</style>
