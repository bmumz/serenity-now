<template>
  <div>
    <h2>{{ randomQuote.author }}</h2>
    <div class="characters">
      <div v-for="(character, index) in characters" v-bind:key="index">
        <button
          class="button"
          @click.prevent="
            handleChooseCharacter(randomQuote.author, character.name)
          "
        >
          <img :src="character.url" :alt="character.name" />
        </button>
        {{
          randomQuote.author === character.name ? `${character.name}` : 'Nope'
        }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Characters',
  data() {
    return {
      characters: [
        { name: 'Jerry', url: require('../assets/jerryBtn.png') },
        { name: 'Elaine', url: require('../assets/elaineBtn.png') },
        { name: 'Kramer', url: require('../assets/kramerBtn.png') },
        { name: 'George', url: require('../assets/georgeBtn.png') },
      ],
    };
  },
  methods: {
    handleChooseCharacter(author, character) {
      if (author === character) {
        console.log('test');
      }
      if (author !== character) {
        console.log('try again!');
      }
    },
  },
  computed: mapGetters(['randomQuote']),
};
</script>
<style>
.characters {
  display: flex;
  justify-content: center;
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
